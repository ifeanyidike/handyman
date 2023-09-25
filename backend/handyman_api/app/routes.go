package app




func (a App) InitializeRoutes() {
	a.Router.HandleFunc("/register", a.RegisterHandler).Methods("POST")
	a.Router.HandleFunc("/login", a.LoginHandler).Methods("POST")
	a.Router.HandleFunc("/reset", a.ResetPasswordHandler).Methods("PUT")
	a.Router.HandleFunc("/loginwithgoogle", a.LoginWithGoogle).Methods("GET")
	a.Router.HandleFunc("/auth/callback/google", a.HandleGoogleCallback).Methods("GET")
}

