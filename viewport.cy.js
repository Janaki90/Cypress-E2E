/// <reference types="Cypress" />

describe('Test Automation - Cypress',()=>{

    it('TC1-Viewport Test',()=>{
        cy.viewport(990,760)
        cy.visit('https://www.amazon.com')       
        cy.wait(2000);
    })

        
    it('TC2-Viewport iphone3 Test',()=>{
        cy.viewport('iphone-3')
        cy.visit('https://www.amazon.com')       
        cy.wait(2000);
    })
    it('TC3-Viewport macbook-16 Test',()=>{
        cy.viewport('macbook-16','landscape')
        cy.visit('https://www.amazon.com')       
        cy.wait(2000);
    })
    it('TC4-Viewport ipad-mini Test',()=>{
         cy.viewport('ipad-mini','landscape')
         cy.visit('https://www.amazon.com')       
         cy.wait(2000);
     })

     it('TC5-Viewport samsung-s10 Test',()=>{
         cy.viewport('samsung-s10')
         cy.visit('https://www.amazon.com')    
         cy.wait(2000);   
 
     })
    

    })  

