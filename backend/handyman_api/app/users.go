package app

import (
	"fmt"
	"net/http"

	"github.com/ifeanyidike/handyman/backend/api/data"
)

func (a *App) RegisterHandler(w http.ResponseWriter, r *http.Request) {
	user := data.User{}
	if err := user.Register(r); err != nil {
		fmt.Println(err)
	}
	
	fmt.Println("user", user)
}

func (a *App) LoginHandler(w http.ResponseWriter, r *http.Request){
	user := data.User{}
	if token, err := user.Login(r); err != nil{
		fmt.Println(err)
	} else {
		fmt.Println("token", token)
		id, _ := user.GetUserInfoFromJWT(token)
		fmt.Println("id", id)
	}
}

func (App) LoginWithGoogle(w http.ResponseWriter, r *http.Request) {
	googleLoginURL := data.GoogleOAuth.LoginWithOAuth()
	http.Redirect(w, r, googleLoginURL, http.StatusTemporaryRedirect)
}

func (App) HandleGoogleCallback(w http.ResponseWriter, r *http.Request) {
	token, err := data.GoogleOAuth.HandleOAuthCallback(r)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Fprintln(w, "Google Access Token: ", token.AccessToken)
	fmt.Fprintln(w, "Google ID Token: ", token.Extra("id_token"))
}

func (a *App) ResetPasswordHandler(w http.ResponseWriter, r *http.Request){
	user := data.User{}
	if err := user.ResetPassword(r); err != nil{
		fmt.Println(err)
	}
}