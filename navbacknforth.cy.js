/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Navigation forward backward', function()

{
  it('Navigation Test', function()
  {

    cy.visit('https://demo.opencart.com/', { failOnStatusCode: false });
    
    cy.title().should('eq','Your Store')

    cy.get("#narbar-menu > ul > li:nth-child(7) > a").contains('Cameras').click()
    cy.title().should('eq','Cameras')
    
    cy.go('back')
    cy.title().should('eq','Your Store')
    cy.wait(2000)
    cy.go('forward')
    cy.title().should('eq','Cameras')
    cy.wait(2000)
    cy.go(-1)  //back
    cy.title().should('eq','Your Store')
    cy.wait(2000)
    cy.go(1)  //forward
    cy.title().should('eq','Cameras')
    cy.wait(2000)
    cy.reload()
 }) 
})
