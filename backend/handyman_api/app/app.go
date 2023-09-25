package app

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"github.com/joho/godotenv"
)




type App struct {
	Router   *mux.Router	
}


func (a *App) Initialize(dbNameString string) {
	if err := godotenv.Load("../.env"); err != nil {
		log.Fatalln(err)
	}

	mgo := db.Mgo{
		URI:    os.Getenv("MONGODB_URI"),
		DbName: os.Getenv(dbNameString),
	}
	mgo.Init()
	a.Router = mux.NewRouter()
	a.InitializeRoutes()
}

func (a App) Run(addr string){
	log.Fatal(http.ListenAndServe(addr, a.Router))
}