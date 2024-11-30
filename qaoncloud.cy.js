/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Mytest', function()

{
  it('qaoncloud', function()
  {

    cy.visit('https://www.qaoncloud.com/', { failOnStatusCode: false });
    cy.get('.elementskit-menu-hamburger-icon]').click()





    
  })
})
