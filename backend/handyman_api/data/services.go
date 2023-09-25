package data

import (
	"time"

	"github.com/shopspring/decimal"
)

type Service struct {
	ID         string          `json:"id" bson:"_id"`
	Type       string          `json:"type" bson:"type"`
	SubType    string          `json:"subType" bson:"subType"`
	Provider   User            `json:"provider" bson:"provider"`
	Price      decimal.Decimal `json:"price" bson:"price"`
	MainPic    string          `json:"mainPic" bson:"mainPic"`
	SamplePics []string        `json:"samplePics" bson:"samplePics"`
	Reviews    []Review        `json:"reviews" bson:"reviews"`
}

type Review struct {
	ID          string    `json:"id" bson:"_id"`
	Reviewer    User      `json:"reviewer" bson:"reviewer"`
	Rating      uint8     `json:"rating" bson:"rating"`
	Description string    `json:"description" bson:"description"`
	Date        time.Time `json:"date" bson:"date"`
}
