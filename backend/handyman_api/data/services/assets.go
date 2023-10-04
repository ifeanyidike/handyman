package services

import (
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Asset struct {
	ID        primitive.ObjectID `json:"Id" bson:"_id"`
	ServiceID primitive.ObjectID `json:"serviceId" bson:"serviceId"`
	Service   Service            `json:"service" bson:"service,omitempty"`
	Type      string             `json:"type" bson:"type"`
	URL       string             `json:"url" bson:"url"`
	DateAdded time.Time             `json:"dateAdded" bson:"dateAdded"`
}
var (
	assetCollection = &ServiceData[Asset]{Collection: db.DB.Collection("assets")}
)

func (a *Asset) FindByServiceID(r *http.Request) ([]Asset, error) {
	return assetCollection.FindByServiceID(r)
}

func (a *Asset) UpdateOne(r *http.Request) error {
	return assetCollection.UpdateOne(r)
}

func (a *Asset) DeleteOne( r *http.Request) error {
	return assetCollection.DeleteOne(r)
}

func (a *Asset) CreateOne( r *http.Request) error {
	vars := mux.Vars(r)

	serviceId, err := primitive.ObjectIDFromHex(vars["serviceId"])
	if err != nil {
		return err
	}

	a.ID = primitive.NewObjectID()
	a.ServiceID = serviceId
	a.DateAdded = time.Now()
	return assetCollection.CreateOne(r, &a)
}
