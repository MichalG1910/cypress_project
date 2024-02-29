// Custom Commands to takie globalne metody, które możemy sami stworzyć, a później wielokrotnie wykorzystywać
//znajduja się one w pliku support/commands.js 
// w pliku tym znajduja sie też podpowiedzi, jak tworzyć te metody

/// <reference types="cypress" />                   

import { login, password } from "../fixtures/loginData.json"            // importujemy zmienne zapisane w pliku loginData.json

describe("Custom Commands", () =>{           
    it("Logowanie do strony automationpractice.pl", () => {         
        cy.login(login, password);                                      // korzystamy z metody utworzonej przez nas (do logowania)
    })
})