// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




// tworzymy metodę logowania jak we wzorze ponizej
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
import Base from "../pageObjectModel/Base";

Cypress.Commands.add("login", (login, password) => {            // nasza metoda ma nazwę "login", przekazujemy zmienne login, password
    Base.openHomePage();                                        // przechodzi na stronę startową
    cy.get("a.login").click();                                  // przechodzimy do strony logowania (sign in)
    cy.get("#login_form").should("be.visible");                 // robimy asercje sprawdzająca czy jest pole do wpisania loginu/hasła
    cy.get("#email").type(login)                                // przekazujemy do lokalizatora(pola z adresem email) zmienna z emailem
    cy.get("#passwd").type(password)                            // przekazujemy do lokalizatora(pola z password) zmienna z hasłem
    cy.get("#SubmitLogin").click()                              // klikamy w przycisk sign in (spowoduje zalogowanie)
})


