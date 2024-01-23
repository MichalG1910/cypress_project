// test uruchomi stronę google.com (pamietamy o uruchomeniu w terminalu npx cypress open)

// dodaje bibliotekę, która będzie podpowiadała metody, funkcje do obiektów
/// <reference types="cypress" />                   

describe("Mój pierwszy test automatyczny", () =>{       // blok describe opisuje słownie, czym będzie się zajmował test, ()=>{} - tworzymy funkcję strzałkową i dodajemy blok
    it("Otworzenie strony google.com", () => {          // it - tworzymy step (krok), a w nim kolejny blok
        cy.visit("https://google.com");                 // cy.visit() - odpowiada za załadowanie strony www
    })
})                              