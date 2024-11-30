/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Mytest', function()

{
  it('Navigation Test', function()
  {

    cy.visit('https://demo.nopcommerce.com/', { failOnStatusCode: false });
    
    cy.title().should('eq','demo.nopcommerce.com')

    cy.get('.ico-register').contains('Register').click()
    cy.title().should('eq','Register')
    
    cy.go('back')
    cy.title().should('eq','demo.nopcommerce.com')
    cy.wait(2000)
    cy.go('forward')
    cy.title().should('eq','Register')
    cy.wait(2000)
    cy.go(-1)  //back
    cy.title().should('eq','demo.nopcommerce.com')
    cy.wait(2000)
    cy.go(1)  //forward
    cy.title().should('eq','Register')
    cy.wait(2000)
    cy.reload()
 }) 
})
