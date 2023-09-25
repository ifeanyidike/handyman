package data

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (u *User) UpdateUserProfile(r *http.Request) (User, error) {
	vars := mux.Vars(r)
	updatedUser := User{}
	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		return updatedUser, err
	}
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return updatedUser, err
	}

	filter := bson.D{
		{
			Key:   "_id",
			Value: id,
		},
	}

	update := bson.D{
		{
			Key: "$set",
			Value: bson.D{
				{
					Key:   "firstName",
					Value: u.FirstName,
				},
				{
					Key:   "lastName",
					Value: u.LastName,
				},
				{
					Key:   "dob",
					Value: u.DOB,
				},
				{
					Key:   "address",
					Value: u.Address,
				},
				{
					Key:   "age",
					Value: u.Age,
				},
			},
		},
	}

	ctx, cancel := context.WithTimeout(r.Context(), 3*time.Second)
	defer cancel()
	if err := db.DB.Collection("users").FindOneAndUpdate(ctx, filter, update).Decode(&updatedUser); err != nil {
		return updatedUser, err
	}

	return updatedUser, nil
}

func (u *User) GetUser(filter primitive.D, r *http.Request) error{
	ctx, cancel := context.WithTimeout(r.Context(), 3 * time.Second)
	defer cancel()
	if err := db.DB.Collection("users").FindOne(ctx, filter).Decode(&u); err != nil {
		return err
	}
	return nil
}

func (u *User) GetUserByID(r *http.Request) (error) {
	vars := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(vars["id"])
	if err != nil {
		return err
	}
	filter := bson.D{
		{
			Key: "_id",
			Value: id,
		},
	}

	if err := u.GetUser(filter, r); err != nil {
		return err
	}
	return nil
}

func (u *User) GetUserByEmail(r *http.Request) (error) {
	vars := mux.Vars(r)
	filter := bson.D{
		{
			Key: "email",
			Value: vars["email"],
		},
	}

	if err := u.GetUser(filter, r); err != nil {
		return err
	}
	return nil
}

func (u *User) GetUserByUsername(r *http.Request) (error) {
	vars := mux.Vars(r)
	filter := bson.D{
		{
			Key: "username",
			Value: vars["username"],
		},
	}

	if err := u.GetUser(filter, r); err != nil {
		return err
	}
	return nil
}
