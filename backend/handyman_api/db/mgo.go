package db

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Mgo struct {
	URI    string
	DbName string
}

var (
	DB       *mongo.Database
	DBClient *mongo.Client
)

func (db *Mgo) Init() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(db.URI))
	if err != nil {
		log.Fatalln(err)
	}
	database := client.Database(db.DbName)
	DB = database
	DBClient = client
}
