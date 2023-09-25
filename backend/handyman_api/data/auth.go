package data

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v5"
	"github.com/ifeanyidike/handyman/backend/api/db"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/facebook"
	"golang.org/x/oauth2/github"
	"golang.org/x/oauth2/google"
)

type User struct {
	ID        primitive.ObjectID `json:"id" bson:"_id"`
	Username  string             `json:"username" bson:"username" validate:"required,min=3"`
	FirstName string             `json:"firstName" bson:"firstName,omitempty"`
	LastName  string             `json:"lastName" bson:"lastName,omitempty"`
	Email     string             `json:"email" bson:"email" validate:"required,email"`
	Password  string             `json:"password" bson:"password" validate:"required"`
	DOB       time.Time          `json:"dob" bson:"dob,omitempty"`
	Phone     string             `json:"phone" bson:"phone,omitempty"`
	Address   string             `json:"address" bson:"address,omitempty"`
	Age       string             `json:"age" bson:"age,omitempty"`
}

type Claims struct {
	ID primitive.ObjectID `json:"id" bson:"_id"`
	jwt.RegisteredClaims
}

type OAuthConfigWrapper struct {
	*oauth2.Config
}

var googleOauthConfig = NewOAuthConfig(
	"GOOGLE_CLIENT_ID",
	"GOOGLE_CLIENT_SECRET",
	"GOOGLE_CALLBACK",
	google.Endpoint,
	[]string{"openid", "profile", "email"},
)

var fbOauthConfig = NewOAuthConfig(
	"FB_CLIENT_ID",
	"FB_CLIENT_SECRET",
	"FB_CALLBACK",
	facebook.Endpoint,
	[]string{"openid", "profile", "email"},
)

var githubOauthConfig = NewOAuthConfig(
	"GITHUB_CLIENT_ID",
	"GITHUB_CLIENT_SECRET",
	"GITHUB_CALLBACK",
	github.Endpoint,
	[]string{"openid", "profile", "email"},
)

var GoogleOAuth = &OAuthConfigWrapper{Config: googleOauthConfig}
var FbOAuth = &OAuthConfigWrapper{Config: fbOauthConfig}
var GithubOauth = &OAuthConfigWrapper{Config: githubOauthConfig}

type OAuther interface {
	LoginWithOAuth() string
	HandleOAuthCallback(r *http.Request) (*oauth2.Token, error)
}

func NewOAuthConfig(clientID, clientSecret, redirectURL string, endpoint oauth2.Endpoint, scopes []string) *oauth2.Config {
	if err := godotenv.Load("../.env"); err != nil {
		log.Fatal(err)
	}

	return &oauth2.Config{
		ClientID:     os.Getenv(clientID),
		ClientSecret: os.Getenv(clientSecret),
		RedirectURL:  os.Getenv(redirectURL),
		Scopes:       scopes,
		Endpoint:     endpoint,
	}
}

func (u *User) HashPassword() error {
	if u.Password == "" {
		return errors.New("password cannot be empty")
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(u.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	u.Password = string(hash)
	return nil
}

func (u *User) Validate() error {
	validate := validator.New(validator.WithRequiredStructEnabled())
	if err := validate.Struct(u); err != nil {
		return err
	}
	return nil
}

func (u User) ValidatePassword() error {
	if u.Password == "" {
		return errors.New("password is required")
	}
	return nil
}

func (u User) ValidateUsernameOrEmail() error {
	if u.Username == "" && u.Email == "" {
		return errors.New("either Username or email is required")
	}
	return nil
}

func (u *User) VerifyPassword(password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(u.Password), []byte(password))
	return err == nil
}

func (u *User) GenerateToken() (string, error) {
	mySigningKey := []byte(os.Getenv("JWT_SECRET"))
	fmt.Println(u.ID)
	claims := Claims{
		u.ID,
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			Issuer:    "handyman",
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(mySigningKey)
}

func (u *User) Register(r *http.Request) error {
	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		return err
	}
	if err := u.Validate(); err != nil {
		return err
	}
	err := u.HashPassword()
	if err != nil {
		return err
	}
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	u.ID = primitive.NewObjectID()
	defer cancel()
	_, err = db.DB.Collection("users").InsertOne(ctx, u)

	if err != nil {
		return err
	}

	return nil
}

func (u *User) Login(r *http.Request) (string, error) {

	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		return "", err
	}
	if err := u.ValidatePassword(); err != nil {
		return "", err
	}
	if err := u.ValidateUsernameOrEmail(); err != nil {
		return "", err
	}

	//Fetch data from db
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	filter := bson.M{
		"$or": []bson.M{
			{"username": u.Username},
			{"email": u.Email},
		},
	}
	var foundUser User
	err := db.DB.Collection("users").FindOne(ctx, filter).Decode(&foundUser)
	if err == mongo.ErrNoDocuments {
		return "", errors.New("User not found")
	}
	if err != nil {
		return "", err
	}

	if !foundUser.VerifyPassword(u.Password) {
		return "", errors.New("passwords do not match")
	}

	token, err := foundUser.GenerateToken()
	if err != nil {
		return "", err
	}
	return token, nil
}

func (u *User) ResetPassword(r *http.Request) error {
	if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
		return err
	}
	if err := u.HashPassword(); err != nil {
		return err
	}
	fmt.Println(u)
	ctx, cancel := context.WithTimeout(r.Context(), 10*time.Second)
	defer cancel()

	_id, _ := primitive.ObjectIDFromHex(u.ID.Hex())
	filter := bson.D{
		{
			Key:   "_id",
			Value: _id,
		},
	}
	update := bson.D{
		{
			Key: "$set",
			Value: bson.D{
				{
					Key:   "password",
					Value: u.Password,
				},
			},
		},
	}

	_, err := db.DB.Collection("users").UpdateOne(ctx, filter, update)

	if err != nil {
		fmt.Println(err)
	}
	return nil
}

func (u *User) GetUserInfoFromJWT(tokenString string) (string, error) {
	token, err := jwt.ParseWithClaims(tokenString, &Claims{}, func(t *jwt.Token) (interface{}, error) {
		return []byte(os.Getenv("JWT_SECRET")), nil
	})
	if err != nil {
		return "", err
	}

	if claims, ok := token.Claims.(*Claims); ok && token.Valid {
		return claims.ID.String(), nil
	}
	return "", nil
}

func (o *OAuthConfigWrapper) LoginWithOAuth() string {
	url := o.AuthCodeURL("state-token", oauth2.AccessTypeOffline)
	return url
}

func (o *OAuthConfigWrapper) HandleOAuthCallback(r *http.Request) (*oauth2.Token, error) {
	code := r.URL.Query().Get("code")
	token, err := o.Exchange(r.Context(), code)
	if err != nil {
		return nil, err
	}
	return token, nil
}
