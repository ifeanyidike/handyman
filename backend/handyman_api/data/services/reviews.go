package services

import (
	"net/http"
	"os/user"
	"time"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Review struct {
	ID          primitive.ObjectID `json:"id" bson:"_id"`
	ReviewerID  primitive.ObjectID `json:"reviewerId" bson:"reviewerId"`
	Reviewer    user.User          `json:"reviewer" bson:"reviewer,omitempty"`
	Rating      uint8              `json:"rating" bson:"rating"`
	Description string             `json:"description" bson:"description"`
	Date        time.Time          `json:"date" bson:"date"`
	ServiceID   primitive.ObjectID `json:"serviceId" bson:"serviceId"`
	Service     Service            `json:"service" bson:"service,omitempty"`
}

var (
	reviewCollection = &ServiceData[Review]{Collection: db.DB.Collection("reviews")}
)

func (s *Review) FindByServiceID(r *http.Request) ([]Review, error) {
	return reviewCollection.FindByServiceID(r)
}

func (review *Review) CreateOne(r *http.Request) error {
	vars := mux.Vars(r)
	reviewerId, err := primitive.ObjectIDFromHex(vars["reviewerId"])
	if err != nil{
		return err
	}

	serviceId, err := primitive.ObjectIDFromHex(vars["serviceId"])
	if err != nil{
		return err
	}
	review.ID = primitive.NewObjectID()
	review.ReviewerID = reviewerId
	review.ServiceID = serviceId
	review.Date = time.Now()
	
	return reviewCollection.CreateOne(r, &review)
}
