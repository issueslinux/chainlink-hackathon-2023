package main

import (
    "fmt"
    "log"
    "github.com/smartcontractkit/external-initiator/"
     "github.com/smartcontractkit/external-initiator"
)

func main() {
    ei := initiator.New(
        "http://localhost:6688", // URL Twojego Chainlink Node
        "07dd7b1b4a654d98a3a6fc562863ee6e", // Klucz dostępowy dla External Initiatora
    )

    // Rozpoczęcie nasłuchiwania na zdarzenia i ich przesyłanie do Chainlink Node
    err := ei.Start()
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("External Initiator is running...")
    select {}
}
