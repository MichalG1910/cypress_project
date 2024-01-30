
/// <reference types="cypress" />                   

describe("Testy związane z zaznaczaniem checkbox, selectem", () =>{           
    it("kliknięcie w zakładkę Women", () => {       
        cy.visit("/");                                                      
        cy.wait(1000);                                                     
        cy.get('a[title="Women"]').click();                            
        cy.wait(1000);
        
    })
    
    it("Zaznaczanie/odznaczenie checkboxa w zakładce Women", () => {                                                                
        cy.get('#layered_category_4').check();                      // metoda check() spowoduje zaznaczenie ptaszka checkboxa         
        cy.wait(1000);
        cy.get('#layered_category_8').check();                               
        cy.wait(1000);
        cy.get('#layered_category_4').uncheck();                    // metoda uncheck() odznaczy ptaszek w checkbox      
        cy.get('#layered_category_8').uncheck();                                                      
        cy.wait(1000);
    })

    it("Zaznaczanie/odznaczenie grupy checkboxów w zakładce Women", () => {                                                                
        cy.get('#ul_layered_id_attribute_group_1 input').check();      // dodanie input (znacznik w kodzie html w którym jest id (X)) spowoduje zaznaczenie ptaszków wszystkich checkbox w tej grupie                                                               
        cy.wait(3000);
        cy.get('#ul_layered_id_attribute_group_1 input').uncheck();
        cy.wait(1000);  
    })

    it("Test związany z wybieraniem select w zakładce Women", () => {                                                                
        cy.get('#selectProductSort').select("In stock");                // select - zaznaczy In stock z listy rozwijanej do sortowania (po nazwie)                                                   
        cy.wait(3000);
        cy.get('#selectProductSort').select("--");
        cy.wait(1000);
        cy.get('#selectProductSort').select("name:asc");                // select - zaznaczy Product Name: A to Z (po Value) 
        cy.wait(3000);  
        cy.get('#selectProductSort').select("position:asc");
        cy.wait(1000);
        
    })

    it("Asercje", () => {                                                                
        cy.visit("/");
        cy.get('a[title="Women"]').click(); 
        cy.url().should("include", "id_category=3&controller=category");            // url() - pobiera aktualny adres url z paska adresu wyszukiwarki i dzięki should("include", "szukana fraza") przeszukuje go w poszukiwaniu "szukanej frazy"  
                                                                                    // w gui cypress w lewej sekcji (kontroli przebiegu testu) pojawia się: assert expected http://www.automationpractice.pl/index.php?id_category=3&controller=category to include id_category=3&controller=category
        cy.get('#layered_category_4').check();                  
        cy.get('#layered_category_4').should("be.checked");                         // get pobierze checkboxa, should("be.checked") sprawdzi, czy nastapił zaznaczenie go (ptaszek)         
        cy.get('#layered_category_4').uncheck();                  
        cy.get('#layered_category_4').should("not.be.checked");                     // should("not.be.checked") sprawdzi, czy checkbox nie jest zaznaczony

        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");         // should("have.value", "wartość") - sprawdza , czy pobrany element( tu lista rozwijana) ma ustawioną "wartość"
                                                         
        cy.get('#search_query_top').type("przykładowy tekst");                                                     
        cy.get('#search_query_top').should("have.value", "przykładowy tekst");      // sprawdzamy, czy tekst wpisany w wyszukiwarce to tekst "przykładowy tekst"
        cy.get('button[name="submit_search"]').click();
        cy.get("p.alert").should("be.visible");                                     // po nieudanym wyszukiwaniu wyskakuje komunikat strony "p.alert".  should("be.visible") sprawdzi, czy jest on widoczny
        cy.get("p.alert").should("be.visible").and("include.text", "No results");   // dodatkowo jeszcze sprawdzimy, czy "p.alert" zawiera tekst and("include.text", "No results") "No result"
        cy.get('#search_query_top').should("have.class", "search_query");           // sprawdzamy, czy nasza wyszukiwarka zawiera klasę "search_query" - should("have.class", "search_query")
        cy.get('#search_query_top').should("have.css", "margin-right", "1px");      // sprawdzamy, czy wyszukiwarka zawiera element css o nazwie "margin-right" równy "1px" - should("have.css", "margin-right", "1px")
    })
})                    