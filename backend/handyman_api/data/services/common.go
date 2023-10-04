package services

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

type props interface {
	Showcase | Review | Asset | Service
}

type artifact_props interface {
	Showcase | Asset
}

type ServiceGetter[T any] interface {
	FindByServiceID(r *http.Request) ([]T, error)
}

type ServiceData[T props] struct {
	Collection *mongo.Collection
}

type ArtifactData[T artifact_props] struct {
	*ServiceData[T]
}

func (s ServiceData[T]) DeleteOne(r *http.Request) error {
	vars := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()

	filter := bson.M{"_id": id}
	if _, err := s.Collection.DeleteOne(ctx, filter); err != nil {
		return err
	}
	return nil
}

func (s *ServiceData[T]) FindByServiceID(r *http.Request) ([]T, error) {
	vars := mux.Vars(r)
	serviceId, err := primitive.ObjectIDFromHex(vars["serviceId"])

	if err != nil {
		return nil, err
	}

	ctx, cancel := context.WithTimeout(r.Context(), 5*time.Second)
	defer cancel()

	filter := bson.M{
		"serviceId": serviceId,
	}

	cursor, err := s.Collection.Find(r.Context(), filter)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	results := make([]T, 0)

	for cursor.Next(ctx) {
		var result T
		if err := cursor.Decode(&result); err != nil {
			continue
		}
		results = append(results, result)
	}
	return results, nil
}

func (s *ServiceData[T]) UpdateOne(r *http.Request) error {
	vars := mux.Vars(r)
	if err := json.NewDecoder(r.Body).Decode(&s); err != nil {
		return err
	}
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return err
	}

	filter := bson.M{"id": id}
	update := bson.D{
		{
			Key:   "$set",
			Value: s,
		},
	}

	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()
	
	if _, err = s.Collection.UpdateOne(ctx, filter, update); err != nil {
		return err
	}
	return nil
}

func (s *ServiceData[T]) CreateOne(r *http.Request, item interface{}) error {
	if err := json.NewDecoder(r.Body).Decode(&item); err != nil {
		return err
	}
	ctx, cancel := context.WithTimeout(r.Context(), 3 * time.Second)
	defer cancel()

	if _, err := s.Collection.InsertOne(ctx, item); err != nil {
		return err
	}
	return nil
}
