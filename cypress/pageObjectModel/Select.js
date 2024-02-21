

class Select {                                        
    
    get selectBox() {                                
        return cy.get('#selectProductSort');           
    }

    selectPhrase(selectedOption) {                            
        this.selectBox.select(selectedOption);                                 
    }
    
}

export default new Select();                          