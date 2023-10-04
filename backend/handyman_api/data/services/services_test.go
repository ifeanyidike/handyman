package services_test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-faker/faker/v4"
	"github.com/ifeanyidike/handyman/backend/api/data/services"
	"github.com/ifeanyidike/handyman/backend/api/utils"
)

func PrepareServiceRequest(endpoint string, method string) *httptest.ResponseRecorder {
	a := utils.PrepareCollectionForTest("services")

	var service services.Service
	_ = faker.FakeData(&service)

	serviceJSON, _ := json.Marshal(&service)
	req, _ := http.NewRequest(method, "/services"+endpoint, bytes.NewBuffer(serviceJSON))
	req.Header.Set("Content-Type", "application/json")
	rw := httptest.NewRecorder()

	a.Router.ServeHTTP(rw, req)
	return rw
}

func TestCreateService(t *testing.T) {
	rw := PrepareServiceRequest("services/create", "POST")

	if rw.Code != http.StatusCreated {
		t.Errorf("Expected code to be %d but got %d", http.StatusCreated, rw.Code)
	}

	var responseMap map[string]interface{}
	if err := json.Unmarshal(rw.Body.Bytes(), &responseMap); err != nil {
		t.Errorf("Error parsing JSON: %v", err)
	}

	if message, ok := responseMap["message"].(string); ok && message != "Registration successful" {
		t.Errorf("Expected message to be 'Registration successful' but got '%s'", message)
	}
}
