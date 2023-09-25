package main

import (
	"github.com/ifeanyidike/handyman/backend/api/app"
)

func main() {
	a := new(app.App)
	a.Initialize("MONGODB_NAME")
	a.Run(":8080")
}
