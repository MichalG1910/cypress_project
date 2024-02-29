
/// <reference types="cypress" /> 

import Base from "../pageObjectModel/Base";                                         // importujemy klasę Base z lokalizacji "../pageObjectModel/Base"
import Home from "../pageObjectModel/Home";                                         // importujemy klasę Home z lokalizacji "../pageObjectModel/Home"
import Women from "../pageObjectModel/Women";                                       // importujemy klasę Women z lokalizacji "../pageObjectModel/Women" 
import Search from "../pageObjectModel/Search";                                     // importujemy klasę Search z lokalizacji "../pageObjectModel/Search"
import ResultPage from "../pageObjectModel/ResultPage";                             // importujemy klasę ResultPage z lokalizacji "../pageObjectModel/ResultPage"
import Select from "../pageObjectModel/Select";                                     // importujemy klasę Select z lokalizacji "../pageObjectModel/Select"
import { searchPhrase } from "../fixtures/SearchData.json"                          // importujemy wzorcowy tekst z pliku SearchData.json znajdujacego sie w katalogu fixtures
import { searchPhrasePrintedDress, noFoundProduct, selectOptionInStock, selectOptionQuantity, selectOptionMinMin, selectOptionPosition, selectOptionName } from "../fixtures/SearchData.json"   // w jednym imporcie mozna zawrzec wiecej wzorców
import { login, password } from "../fixtures/loginData.json"                        // tu importujemy login i hasło z pliku loginData.json

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
        Search.searchBox.should("have.value", searchPhrase);                 // tu dla przykładu uzyłem gettera searchBox z klasy Search i zastosowałem na nim metodę should("have.value", searchPhrase)
        Base.waitShort();
        Search.clearSearchPhrase();
        Search.typeSearchPhraseWithVariable(searchPhrase)                           // korzystamy z klasy Search i dla przykładu do tej funkcji przekazujemy zmienna (konstrukcja funkcji jest inna niż tradycyjnej - patrz plik Search.js)
        Base.waitShort();                                                           // zmienną tą jest wzorcowy tekst z SearchData.json. Może to być też dowolny strin wpisany z reki np. "jakiś tekst"
        Search.clearSearchPhrase();                               
        Base.waitShort();
        Search.typeSearchPhraseWithVariable(`${searchPhrasePrintedDress}{enter}`);  // tu dla przykładu do funkcji przekazujemy wzorcowy tekst z pliku SearchData.json i potwierdzamy przyciskiem {enter}    
        Base.waitShort();                                                      
        cy.url().should("include", "controller=search&orderby=position&orderway=desc&search_query=printed+dress&submit_search=");    
        cy.get('img[alt="My Shop"]').click();
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
        Select.selectPhrase(selectOptionInStock);
        Select.selectBox.should("have.value", selectOptionQuantity);                                                                       
        Base.waitLong();
        Select.selectPhrase(selectOptionMinMin);
        Select.selectBox.should("have.value", selectOptionPosition);              
        Base.waitShort();
        Select.selectPhrase(selectOptionName);
        Select.selectBox.should("have.value", selectOptionName);                         
        Base.waitLong();  
        Select.selectPhrase(selectOptionPosition);
        Select.selectBox.should("have.value", selectOptionPosition);               
        Base.waitShort();
    })

    it("Asercje", () => {                                                                
        Base.openHomePage();
        Home.clickOnWomenTab(); 
        cy.url().should("include", "id_category=3&controller=category");              
                                                                                   
        Women.checkTops();                  
        Women.topsCheckbox.should("be.checked");                                  
        Women.uncheckTops();                  
        Women.topsCheckbox.should("not.be.checked");                     

        Select.selectPhrase(selectOptionInStock);
        Select.selectBox.should("have.value", selectOptionQuantity);         
                                                         
        Search.typeSearchPhrase();                                                     
        Search.searchBox.should("have.value", searchPhrase);      
        cy.get('button[name="submit_search"]').click();
        ResultPage.searchAlert.should("be.visible");                                     
        ResultPage.searchAlert.should("be.visible").and("include.text", noFoundProduct);   
        Search.searchBox.should("have.class", "search_query");           
        Search.searchBox.should("have.css", "margin-right", "1px");      
    })

    it("Logowanie do strony automationpractice.pl", () => {         
        cy.login(login, password);                                      
    })

})  
