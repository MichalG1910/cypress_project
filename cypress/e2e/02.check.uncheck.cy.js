
/// <reference types="cypress" />                   

describe("Testy związane z zaznaczaniem checkbox", () =>{           
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

    it("Zaznaczanie grupy checkboxów w zakładce Women", () => {                                                                
        cy.get('#ul_layered_id_attribute_group_1 input').check();      // dodanie input (znacznik w kodzie html w którym jest id (X)) spowoduje zaznaczenie ptaszków wszystkich checkbox w tej grupie                                                               
    })
})                    