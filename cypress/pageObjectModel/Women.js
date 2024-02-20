
class Women {                                        
    
    get topsCheckbox() {                                
        return cy.get('#layered_category_4');           
    }

    get dressesCheckbox() {                                
        return cy.get('#layered_category_8');           
    }

    get sizeCheckbox() {                                
        return cy.get('#ul_layered_id_attribute_group_1 input');           
    }
    
    //tops
    checkTops() {                            
        this.topsCheckbox.check();                      
    }
    uncheckTops() {                            
        this.topsCheckbox.uncheck();                      
    }
    shouldBeCheckedTops() {                            
        this.topsCheckbox.should("be.checked");                      
    }
    shouldNotBeCheckedTops() {                            
        this.topsCheckbox.should("not.be.checked");                      
    }
    
    //dresses
    checkDresses() {                            
        this.dressesCheckbox.check();                      
    }
    uncheckDresses() {                            
        this.dressesCheckbox.uncheck();                      
    }
    shouldBeCheckedDresses() {                            
        this.dressesCheckbox.should("be.checked");                      
    }
    shouldNotBeCheckedDresses() {                            
        this.dressesCheckbox.should("not.be.checked");
    }

    //size
    checkSize() {                            
        this.sizeCheckbox.check();                      
    }
    uncheckSize() {                            
        this.sizeCheckbox.uncheck();                      
    }
    shouldBeCheckedSize() {                            
        this.sizeCheckbox.should("be.checked");                      
    }
    shouldNotBeCheckedSize() {                            
        this.sizeCheckbox.should("not.be.checked");
    }
}

export default new Women();                          