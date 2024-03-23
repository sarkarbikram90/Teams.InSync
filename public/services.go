// main.go

package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/someendpoint", handleSomeEndpoint)
	http.ListenAndServe(":8080", nil)
}

func handleSomeEndpoint(w http.ResponseWriter, r *http.Request) {
	// Handle the request and send response
	fmt.Fprintf(w, "Hello from Go service!")
}
