package services

import (
	"context"
	"errors"
	"net/http"
	"os/user"
	"sync"
	"time"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"github.com/shopspring/decimal"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Service struct {
	ID           primitive.ObjectID `json:"id" bson:"_id"`
	Type         string             `json:"type" bson:"type"`
	SubType      string             `json:"subType" bson:"subType"`
	PricePerUnit decimal.Decimal    `json:"pricePerUnit" bson:"pricePerUnit"`
	ProviderID   primitive.ObjectID `json:"providerId" bson:"providerId"`
	Provider     user.User          `json:"provider" bson:"provider,omitempty"`   // This will hold populated fields
	Showcases    []Showcase         `json:"showcases" bson:"showcases,omitempty"` // This will hold populated showcases
	Assets       []Asset            `json:"assets" bson:"assets,omitempty"`       // This will hold populated assets
	Reviews      []Review           `json:"reviews" bson:"reviews,omitempty"`     // This will hold populated reviews
}

var (
	serviceCollection = &ServiceData[Service]{Collection: db.DB.Collection("services")}
)

func NewService() *Service {
	return &Service{}
}

func (s *Service) Create(r *http.Request) error {
	s.ID = primitive.NewObjectID()
	return serviceCollection.CreateOne(r, &s)
}

func (s *Service) Update(r *http.Request) error {
	return serviceCollection.UpdateOne(r)
}

func (s *Service) FindOne(r *http.Request) error {
	vars := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return err
	}
	filter := bson.M{"_id": id}
	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()

	if err := db.DB.Collection("services").FindOne(ctx, filter).Decode(&s); err != nil {
		return err
	}

	go s.AddMemberData(r)

	return nil
}

func (s *Service) FindOneWithAggregation(r *http.Request) error {
	vars := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
	defer cancel()

	pipeline := []bson.M{
		{
			"$match": bson.M{"_id": id},
		},
		{
			"$lookup": bson.M{
				"from":         "users",
				"localField":   "providerId",
				"foreignField": "_id",
				"as":           "provider",
			},
		},
		{
			"$unwind": "$provider",
		},
	}
	cursor, err := db.DB.Collection("services").Aggregate(ctx, pipeline)
	if err != nil {
		return err
	}
	defer cursor.Close(ctx)

	if cursor.Next(ctx) {
		if err := cursor.Decode(&s); err != nil {
			return err
		}
	} else {
		return errors.New("service not found")
	}

	go s.AddMemberData(r)
	return nil
}

func (s *Service) FindByUser(r *http.Request) ([]Service, error) {
	vars := mux.Vars(r)
	services := []Service{}

	userId, err := primitive.ObjectIDFromHex(vars["userId"])
	if err != nil {
		return services, err
	}
	filter := bson.M{"userId": userId}
	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()

	curr, err := db.DB.Collection("services").Find(ctx, filter)
	if err != nil {
		return services, err
	}
	defer curr.Close(ctx)

	for curr.Next(ctx) {
		var currService Service
		if err := curr.Decode(&currService); err != nil {
			continue
		}
		go currService.AddMemberData(r)
		services = append(services, currService)
	}

	return services, nil
}

func (s *Service) FindByUserWithAggregation(r *http.Request) ([]Service, error) {
	vars := mux.Vars(r)
	services := []Service{}
	providerID, err := primitive.ObjectIDFromHex(vars["providerId"])
	if err != nil {
		return services, err
	}

	ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
	defer cancel()

	pipeline := []bson.M{
		{
			"$match": bson.M{"providerId": providerID},
		},
		{
			"$lookup": bson.M{
				"from":         "users",
				"localField":   "providerId",
				"foreignField": "_id",
				"as":           "provider",
			},
		},
		{
			"$unwind": "$provider",
		},
	}

	cursor, err := db.DB.Collection("services").Aggregate(ctx, pipeline)
	if err != nil {
		return services, err
	}

	for cursor.Next(ctx) {
		curr := Service{}
		if err := cursor.Decode(&curr); err != nil {
			continue
		}
		go curr.AddMemberData(r)
		services = append(services, curr)
	}
	return services, nil
}

func (s *Service) DeleteOne(r *http.Request) error {
	collection := &ServiceData[Service]{Collection: db.DB.Collection("services")}
	return collection.DeleteOne(r)
}

func (s *Service) AddMemberData(r *http.Request) error {
	var mu sync.RWMutex
	showcaseErr := make(chan error)
	reviewErr := make(chan error)
	assetErr := make(chan error)

	go func() {
		showcase := Showcase{}
		showcases, err := showcase.FindByServiceID(r)
		mu.Lock()
		s.Showcases = showcases
		mu.Unlock()
		showcaseErr <- err
	}()

	go func() {
		review := Review{}
		reviews, err := review.FindByServiceID(r)
		mu.Lock()
		s.Reviews = reviews
		mu.Unlock()
		reviewErr <- err
	}()

	go func() {
		asset := Asset{}
		assets, err := asset.FindByServiceID(r)
		mu.Lock()
		s.Assets = assets
		mu.Unlock()
		assetErr <- err
	}()

	for i := 0; i < 3; i++ {
		select {
		case err := <-showcaseErr:
			if err != nil {
				return err
			}

		case err := <-reviewErr:
			if err != nil {
				return err
			}

		case err := <-assetErr:
			if err != nil {
				return err
			}
		}
	}

	return nil
}
