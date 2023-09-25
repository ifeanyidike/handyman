package db

import "go.mongodb.org/mongo-driver/mongo"

type Initializer[
	DB interface{ ~*mongo.Database },
	Client interface{ ~*mongo.Client }] interface {
	Init() (DB, Client)
}

var (
	db     interface{}
	client interface{}
)
