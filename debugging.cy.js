/// <reference types="Cypress" />  

describe('Debug or stop?' , () => {

    it('Debug', function () {
    
        cy.visit("https://automationintesting.online/#/")
        cy.get('.col-2 > .btn').should('have.text', 'Let me hack!');
        cy.get('#name').clear();
        cy.get('#name').type('Janaki');
        cy.wait(2000);
        cy.get('#email').clear();
        cy.get('#email').type('my email');
        cy.wait(2000);
        cy.get('#phone').clear();
        cy.get('#phone').type('973434');
        cy.wait(2000);
        cy.get('#subject').clear();
        cy.get('#subject').type('Test program for debugging using breakpoints in cypress');
        cy.get('#subject').click();
        cy.wait(2000);
        cy.get('#description').click();
        cy.get('#description').type('This is a test for debugging in cypress using breakpoints');
        cy.wait(2000);
        cy.get('#submitContact').click(); 
     
        cy.get('.contact > :nth-child(2) > div > :nth-child(2)').should('be.visible');
    
    
    })
    
    })
    