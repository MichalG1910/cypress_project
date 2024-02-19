
/// <reference types="cypress" /> 

import Base from "../pageObjectModel/Base";                                         // importujemy klasę Base z lokalizacji "../pageObjectModel/Base"
import Home from "../pageObjectModel/Home";                                         // importujemy klasę Home z lokalizacji "../pageObjectModel/Home"

describe("Testy strony http://www.automationpractice.pl/", () =>{           
    it("Wejście na stronę, kliknięcie w zakładkę Contact us", () => {       
        Base.openHomePage();                                                        // korzystamy z klasy Base z funkcji openHomePage()        
        cy.url().should("include", "http://www.automationpractice.pl/index.php");                                                  
        cy.wait(1000);                                                      
        cy.get('a[title="Contact us"]').click();
        cy.url().should("include", "controller=contact");                   
        cy.wait(1000);
    })
    
    it("Wpisywanie, usuwanie tekstu w wyszukiwarce i wyszukiwanie", () => {          
        Base.openHomePage();
        cy.wait(1000);                                                      
        cy.get('#search_query_top').type("przykładowy tekst");              
        cy.get('#search_query_top').should("have.value", "przykładowy tekst");      
        cy.wait(1000);
        cy.get('#search_query_top').clear();                               
        cy.wait(1000);
        cy.get('#search_query_top').type("printed dress{enter}");           
        cy.wait(1000);                                                      
        cy.url().should("include", "controller=search&orderby=position&orderway=desc&search_query=printed+dress&submit_search=");    
        cy.get('img[alt="My Shop"').click();
        cy.wait(1000); 
    })

    it("kliknięcie w zakładkę Women", () => {                                                                                                               
        Home.clickOnWomenTab();                                             // korzystamy z klasy Home z funkcji clickOnWomenTab(). To samo tylko przy wykorzystaniu gettera: Home.womenTab.click()                    
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

    it("Asercje", () => {                                                                
        Base.openHomePage();
        Home.clickOnWomenTab(); 
        cy.url().should("include", "id_category=3&controller=category");              
                                                                                   
        cy.get('#layered_category_4').check();                  
        cy.get('#layered_category_4').should("be.checked");                                  
        cy.get('#layered_category_4').uncheck();                  
        cy.get('#layered_category_4').should("not.be.checked");                     

        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");         
                                                         
        cy.get('#search_query_top').type("przykładowy tekst");                                                     
        cy.get('#search_query_top').should("have.value", "przykładowy tekst");      
        cy.get('button[name="submit_search"]').click();
        cy.get("p.alert").should("be.visible");                                     
        cy.get("p.alert").should("be.visible").and("include.text", "No results");   
        cy.get('#search_query_top').should("have.class", "search_query");           
        cy.get('#search_query_top').should("have.css", "margin-right", "1px");      
    })
})                    