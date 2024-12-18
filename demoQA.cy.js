/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Automation Testing Registration Page', () => {

       


    it('Filling Registration form', () => {
         // Navigate to the URL before each test
        cy.visit('https://demo.automationtesting.in/Register.html');
        // Fill out the text fields
        cy.get('input[placeholder="First Name"]').type('Janaki');
        cy.get('input[placeholder="Last Name"]').type('T');
        cy.get('textarea[ng-model="Adress"]').type('A1C, 5th street, Chennai');
        cy.get('input[type="email"]').type('janakinavanee@gmail.com');
        cy.get('input[type="tel"]').type('8056272452');

        // Select Gender
        cy.get('input[value="Male"]').check({ force: true });


        // Select Hobbies
        cy.get('#checkbox1').check({ force: true }); // Cricket
        cy.get('#checkbox2').check({ force: true }); // Movies

        // Select Skills from dropdown
        cy.get('#Skills').select('Java');

        // Select Country from dropdown
        cy.get('#countries').select('India');

        // Select Country from searchable dropdown
        cy.get('.select2-selection').click();
        cy.get('.select2-search__field').type('Australia{enter}');

        // Select Date of Birth
        cy.get('#yearbox').select('1990');
        cy.get('select[placeholder="Month"]').select('September');
        cy.get('#daybox').select('1');

        // Set Password and Confirm Password
        cy.get('#firstpassword').type('Password123');
        cy.get('#secondpassword').type('Password123');

        // Upload a file (if required)
        // cy.get('input[type="file"]').attachFile('path/to/file.jpg'); // Uncomment if you want to upload a file

        // Click the Submit button
        cy.get('#submitbtn').click();

        // Assert submission or redirection (depending on behavior)
        // Adjust the assertion below as per the actual behavior after submission
        cy.url().should('not.include', 'Register.html');
    });
});