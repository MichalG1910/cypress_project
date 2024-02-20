
import { searchPhrase } from "../fixtures/SearchData.json"      // importujemy wzorzec tekstu searchPhrase z pliku SearchData.json z wzorcami

class Search {                                        
    
    get searchBox() {                                
        return cy.get('#search_query_top');           
    }

    typeSearchPhrase() {                            
        this.searchBox.type(searchPhrase);                  // korzystamy z zaimportowanego wzorca                   
    }
    clearSearchPhrase() {                            
        this.searchBox.clear();                      
    }
    
}

export default new Search();                          