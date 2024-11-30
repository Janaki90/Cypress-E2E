
/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  describe('template spec', () => {
      it('passes', () => {
        cy.visit('https://demo.automationtesting.in/Register.html')  // Visit URL
  
        cy.get('input[value="Cricket"]').should('be.visible').should('not.be.checked').click() //single select
        cy.wait(2000)
        cy.get('input[value="Movies"]').should('be.visible').should('not.be.checked').click()
        cy.wait(2000)
        cy.get('input[value="Hockey"]').should('be.visible').should('not.be.checked').click()
        cy.wait(2000)
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.wait(2000)
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.wait(2000)
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        cy.wait(2000)
        cy.get('input[type=checkbox]').check(['Cricket','Movies','Hockey']) //multi select
        cy.wait(2000)
        cy.get('#Skills').select('AutoCAD').should('have.value','AutoCAD') // dropdowns single select
        
      })
    })
  