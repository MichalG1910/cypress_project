// Stosowanie klas i funkcji ma sens: 
// do powtarzajacych sie fragmentów testów tworzymy klase, a w niej funkcję
// w testach używamy tej funkcji w celu zastapienia powtarzających się fragmentów kodu
// w momencie zmian na stronie www, zmieniamy tylko w naszej klasie daną funcję (zmieniamy tylko w 1 miejscu, a nie w wielu)


class Base {                                         // tworzymy klasę Base, w której umieścimy napisane przez nas funkcje
    openHomePage() {                                // pierwsza funkcja (otwierająca stronę startowa testowanej strony www)
        cy.visit("/");                               // standardowa obiekt cypress służący do załadowania strony www
    }
}

export default new Base();                          // eksportujemy klase Base jako już stworzony obiekt gotowy do zaimportowania w testach