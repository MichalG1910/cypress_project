
/// <reference types="cypress" /> 

import Base from "../pageObjectModel/Base";                                         // importujemy klasę Base z lokalizacji "../pageObjectModel/Base"
import Home from "../pageObjectModel/Home";                                         // importujemy klasę Home z lokalizacji "../pageObjectModel/Home"
import Women from "../pageObjectModel/Women";                                       // importujemy klasę Women z lokalizacji "../pageObjectModel/Women" 
import Search from "../pageObjectModel/Search";

describe("Testy strony http://www.automationpractice.pl/", () =>{           
    it("Wejście na stronę, kliknięcie w zakładkę Contact us", () => {       
        Base.openHomePage();                                                        // korzystamy z klasy Base z funkcji openHomePage()        
        cy.url().should("include", "http://www.automationpractice.pl/index.php");                                                  
        Base.waitShort();                                                      
        cy.get('a[title="Contact us"]').click();
        cy.url().should("include", "controller=contact");                   
        Base.waitShort();
    })
    
    it("Wpisywanie, usuwanie tekstu w wyszukiwarce i wyszukiwanie", () => {          
        Base.openHomePage();
        Base.waitShort();                                                      
        Search.typeSearchPhrase();              
        cy.get('#search_query_top').should("have.value", "przykładowy tekst");      
        Base.waitShort();
        Search.clearSearchPhrase();                               
        Base.waitShort();
        Search.searchBox.type("printed dress{enter}");                              // tu dla przykładu uzyłem gettera searchBox z klasy Search i zastosowałem na nim metodę type("printed dress{enter}")    
        Base.waitShort();                                                      
        cy.url().should("include", "controller=search&orderby=position&orderway=desc&search_query=printed+dress&submit_search=");    
        cy.get('img[alt="My Shop"').click();
        Base.waitShort(); 
    })

    it("kliknięcie w zakładkę Women", () => {                                                                                                               
        Home.clickOnWomenTab();                                             // korzystamy z klasy Home z funkcji clickOnWomenTab(). To samo tylko przy wykorzystaniu gettera: Home.womenTab.click()                    
        Base.waitShort();
        cy.url().should("include", "id_category=3&controller=category");    
    })
    
    it("Zaznaczanie/odznaczenie checkboxa w zakładce Women", () => {                                                                
        Women.checkTops();
        Women.shouldBeCheckedTops();                                        // * zrobiono funkcje dla asercji. NIE JEST TO DOBRA PRAKTYKA (zrobiono dla przykładu)                            
        Base.waitShort();
        Women.checkDresses(); 
        Women.shouldBeCheckedDresses();                                     // *                                      
        Base.waitShort();
        Women.uncheckTops();                        
        Women.uncheckDresses();
        Women.shouldNotBeCheckedTops();                                     // *            
        Women.shouldNotBeCheckedDresses();                                  // *                                        
        Base.waitShort();
    })

    it("Zaznaczanie/odznaczenie grupy checkboxów w zakładce Women", () => {                                                                
        Women.checkSize();
        Women.shouldBeCheckedSize();                                        // *  
        Base.waitShort();
        Women.uncheckSize();
        Women.shouldNotBeCheckedSize();                                     // *     
        Base.waitShort();                                                                  
    })

    it("Test związany z wybieraniem select w zakładce Women", () => {                                                                
        cy.get('#selectProductSort').select("In stock");
        cy.get('#selectProductSort').should("have.value", "quantity:desc");                                                                       
        Base.waitLong();
        cy.get('#selectProductSort').select("--");
        cy.get('#selectProductSort').should("have.value", "position:asc");              
        Base.waitShort();
        cy.get('#selectProductSort').select("name:asc");
        cy.get('#selectProductSort').should("have.value", "name:asc");                         
        Base.waitLong();  
        cy.get('#selectProductSort').select("position:asc");
        cy.get('#selectProductSort').should("have.value", "position:asc");               
        Base.waitShort();
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