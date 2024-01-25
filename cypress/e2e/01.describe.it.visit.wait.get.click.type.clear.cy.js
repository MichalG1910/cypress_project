// test uruchomi stronę zawartą w baseUrl ("/" - http://www.automationpractice.pl/) (pamietamy o uruchomeniu w terminalu npx cypress open)

// dodaje bibliotekę, która będzie podpowiadała metody, funkcje do obiektów
/// <reference types="cypress" />                   

describe("Testy strony http://www.automationpractice.pl/", () =>{           // blok describe opisuje słownie, czym będzie się zajmował test, () => {} - tworzymy funkcję strzałkową i dodajemy blok. => {} to to samo co function()
    it("Wejście na stronę, kliknięcie w zakładkę Contact us", () => {       // it - tworzymy step (krok), a w nim kolejny blok   
        cy.visit("/");                                                      // visit - załaduje adres www z (). Korzystamy z baseUrl z pliku konfiguracyjnego cypress.config.js - "/" oznacza skorzysttanie z niego
        cy.wait(1000);                                                      // wait(1000) - wstrzymujemy test na 1000 ms
        cy.get('a[title="Contact us"]').click();                            // get - metoda pozwala pobrac element ze strony. click - w tym przypadku przejdzie do linku pobranego z przycisku "Contact us"
        cy.wait(1000);
    })
    
    it("Wpisywanie, usuwanie tekstu w wyszukiwarce i wyszukiwanie", () => {          
        cy.visit("/");
        cy.wait(1000);                                                      
        cy.get('#search_query_top').type("przykładowy tekst");              // pobieramy wyszukiwarke(#search_query_top), type - wpisujemy w niej tekst.( # zawsze jest to id)
        cy.wait(1000);
        cy.get('#search_query_top').clear();                                // pobieramy wyszukiwarkę i za pomocą clear() - czyścimy ją z tekstu
        cy.wait(1000);
        cy.get('#search_query_top').type("printed dress {enter}");          // pobieramy wyszukiwarkę, wpisujemy tekst i używamy klawisza funkcyjnego {enter} - uruchomi to wyszukiwanie
        cy.wait(1000);                                                      // {enter} zrobi to samo co np.: get('button[name="submit_search"]').click();
        cy.get('img[alt="My Shop"').click();
        cy.wait(1000); 
    })

    it("kliknięcie w zakładkę Women", () => {                                                                                                               
        cy.get('a[title="Women"]').click();                            
        cy.wait(1000);
    })
    
    it("Zaznaczanie/odznaczenie checkboxa w zakładce Women", () => {                                                                
        cy.get('#layered_category_4').check();                           
        cy.wait(1000);
        cy.get('#layered_category_8').check();                               
        cy.wait(1000);
        cy.get('#layered_category_4').uncheck();                        
        cy.get('#layered_category_8').uncheck();                                                      
        cy.wait(1000);
    })

    it("Zaznaczanie grupycheckboxów w zakładce Women", () => {                                                                
        cy.get('#ul_layered_id_attribute_group_1 input').check();                                                                  
    })
})                    