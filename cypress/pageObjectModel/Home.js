
class Home {                                        // tworzymy klasę Home, w której umieścimy napisane przez nas funkcje
    
    get womenTab() {                                // tworzymy tzw. getter o nazwie womenTab (globalny schowek dla klasy na lokalizatory, elementy)
        return cy.get('a[title="Women"]');          // przechowuje on i zwraca lokalizator np. z metodą get. 
    }
    
    clickOnWomenTab() {                             // tworzymy funkcję (otwierająca zakladkę Women)
        this.womenTab.click();                      // z naszego gettera przy pomocy this pobieramy lokalizator i wywołujemy na nim metode click()
    }                                               // korzystanie z lokalizatora znajdujacego sie w schowku ułatwia pracę, poniewaz na jednym lokalizatorze możemy uzyć wiele różnych metod
}

export default new Home();                          // eksportujemy klase Home jako już stworzony obiekt gotowy do zaimportowania w testach