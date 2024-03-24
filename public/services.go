// main.go

package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/src/", handleEndpoint)
	http.ListenAndServe(":8080", nil)
}

func handleEndpoint(w http.ResponseWriter, r *http.Request) {
	// Handle the request and send response
	fmt.Fprintf(w, "Hello endpoint")
}
