// test uruchomi stronę zawartą w baseUrl ("/" - http://www.automationpractice.pl/) (pamietamy o uruchomeniu w terminalu npx cypress open)

// dodaje bibliotekę, która będzie podpowiadała metody, funkcje do obiektów
/// <reference types="cypress" />                   

describe("Testy strony http://www.automationpractice.pl/", () =>{           // blok describe opisuje słownie, czym będzie się zajmował test, () => {} - tworzymy funkcję strzałkową i dodajemy blok. => {} to to samo co function()
    it("Wejście na stronę, kliknięcie w zakładkę Contact us", () => {       // it - tworzymy step (krok), a w nim kolejny blok   
        cy.visit("/");                                                      // visit - załaduje adres www z (). Korzystamy z baseUrl z pliku konfiguracyjnego cypress.config.js - "/" oznacza skorzysttanie z niego
        cy.url().should("include", "http://www.automationpractice.pl/index.php");                                                      
        cy.wait(1000);                                                      // wait(1000) - wstrzymujemy test na 1000 ms
        cy.get('a[title="Contact us"]').click();
        cy.url().should("include", "controller=contact");                   // get - metoda pozwala pobrac element ze strony. click - w tym przypadku przejdzie do linku pobranego z przycisku "Contact us"
        cy.wait(1000);
    })
    
    it("Wpisywanie, usuwanie tekstu w wyszukiwarce i wyszukiwanie", () => {          
        cy.visit("/");
        cy.wait(1000);                                                      
        cy.get('#search_query_top').type("przykładowy tekst");              // pobieramy wyszukiwarke(#search_query_top), type - wpisujemy w niej tekst.( # zawsze jest to id)
        cy.get('#search_query_top').should("have.value", "przykładowy tekst"); 
        cy.wait(1000);
        cy.get('#search_query_top').clear();                                // pobieramy wyszukiwarkę i za pomocą clear() - czyścimy ją z tekstu
        cy.wait(1000);
        cy.get('#search_query_top').type("printed dress{enter}");          // pobieramy wyszukiwarkę, wpisujemy tekst i używamy klawisza funkcyjnego {enter} - uruchomi to wyszukiwanie
        cy.wait(1000);                                                      // {enter} zrobi to samo co np.: get('button[name="submit_search"]').click();
        cy.url().should("include", "controller=search&orderby=position&orderway=desc&search_query=printed+dress&submit_search=");
        cy.get('img[alt="My Shop"').click();
        cy.wait(1000); 
    })

    it("kliknięcie w zakładkę Women", () => {                                                                                                               
        cy.get('a[title="Women"]').click();                            
        cy.wait(1000);
        cy.url().should("include", "id_category=3&controller=category");
    })
    
    it("Zaznaczanie/odznaczenie checkboxa w zakładce Women", () => {                                                                
        cy.get('#layered_category_4').check();
        cy.get('#layered_category_4').should("be.checked");                           
        cy.wait(1000);
        cy.get('#layered_category_8').check(); 
        cy.get('#layered_category_8').should("be.checked");                              
        cy.wait(1000);
        cy.get('#layered_category_4').uncheck();                        
        cy.get('#layered_category_8').uncheck();
        cy.get('#layered_category_4').should("not.be.checked");
        cy.get('#layered_category_8').should("not.be.checked");                                                      
        cy.wait(1000);
    })

    it("Zaznaczanie/odznaczenie grupy checkboxów w zakładce Women", () => {                                                                
        cy.get('#ul_layered_id_attribute_group_1 input').check();
        cy.get('#ul_layered_id_attribute_group_1 input').should("be.checked");
        cy.wait(1000);
        cy.get('#ul_layered_id_attribute_group_1 input').uncheck();
        cy.get('#ul_layered_id_attribute_group_1 input').should("not.be.checked");
        cy.wait(1000);                                                                  
    })

    it("Test związany z wybieraniem select w zakładce Women", () => {                                                                
        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");                                                                 
        cy.wait(3000);
        cy.get('#selectProductSort').select("--");
        cy.get('#selectProductSort').should("have.value", "position:asc");
        cy.wait(1000);
        cy.get('#selectProductSort').select("name:asc");
        cy.get('#selectProductSort').should("have.value", "name:asc");               
        cy.wait(3000);  
        cy.get('#selectProductSort').select("position:asc");
        cy.get('#selectProductSort').should("have.value", "position:asc");
        cy.wait(1000);
    })
})                    