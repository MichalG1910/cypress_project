
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
        cy.get('#selectProductSort').select("In stock");               // select - zaznaczy In stock z listy rozwijanej do sortowania (po nazwie)                                                   
        cy.wait(3000);
        cy.get('#selectProductSort').select("--");
        cy.wait(1000);
        cy.get('#selectProductSort').select("name:asc");               // select - zaznaczy Product Name: A to Z (po Value) 
        cy.wait(3000);  
        cy.get('#selectProductSort').select("position:asc");
        cy.wait(1000);
    })
})                    