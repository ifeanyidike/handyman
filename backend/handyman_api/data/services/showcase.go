package services

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Showcase struct {
	ID          primitive.ObjectID `json:"id" bson:"_id"`
	ServiceID   primitive.ObjectID `json:"serviceId" bson:"serviceId"`
	Service     Service            `json:"service" bson:"service,omitempty"`
	URL         string             `json:"url" bson:"url"`
	Description string             `json:"description" bson:"description"`
	DateAdded   time.Time             `json:"dateAdded" bson:"dateAdded"`
}

var (
	showcaseCollection = &ServiceData[Showcase]{Collection: db.DB.Collection("showcases")}
)

func (s *Showcase) CreateOne(r *http.Request) error {
	vars := mux.Vars(r)

	serviceId, err := primitive.ObjectIDFromHex(vars["serviceId"])
	if err != nil {
		return err
	}

	s.ID = primitive.NewObjectID()
	s.ServiceID = serviceId
	s.DateAdded = time.Now()

	return showcaseCollection.CreateOne(r, &s)
}

func (s *Showcase) CreateMany(r *http.Request) error {
	vars := mux.Vars(r)
	serviceId, err := primitive.ObjectIDFromHex(vars["serviceId"])
	if err != nil {
		return err
	}

	type Data struct {
		URL []string `json:"url" bson:"url"`
	}
	d := new(Data)
	if err := json.NewDecoder(r.Body).Decode(&d); err != nil {
		return err
	}

	showcases := []interface{}{}
	now := time.Now()

	for _, v := range d.URL {
		showcase := Showcase{
			ID:        primitive.NewObjectID(),
			DateAdded: now,
			ServiceID: serviceId,
			URL:       v,
		}
		showcases = append(showcases, showcase)
	}

	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()

	if _, err := db.DB.Collection("showcases").InsertMany(ctx, showcases); err != nil {
		return err
	}
	return nil
}

func (s *Showcase) FindByServiceID(r *http.Request) ([]Showcase, error) {
	return showcaseCollection.FindByServiceID(r)
}

func (s *Showcase) DeleteOne(r *http.Request) error {
	return showcaseCollection.DeleteOne(r)
}
