// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
/// <reference types="Cypress-xpath" />

//Customized command

Cypress.Commands.add("login",(email,password) => {

    cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F', { failOnStatusCode: false }); //visit URL
    cy.get('input[name=Email]').type('admin@yourstore.com')
    cy.get('input[name=Password]').type('admin')
    cy.get('button[type=submit]').click()



})

import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand');

require('@4tw/cypress-drag-drop')

Cypress.Commands.add('getIframeBody', (selector) => {
    return cy
      .get(selector) // Get the iframe
      .its('0.contentDocument.body') // Access the iframe's document body
      .should('not.be.empty') // Ensure the body is loaded
      .then(cy.wrap); // Wrap the body in Cypress commands
      
  });

  
  Cypress.Commands.add("parseXlsx", (inputfile) => {
    return cy.task('parseXlsx', { filePath: inputFile })


  });
  
  import * as XLSX from 'xlsx';

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap);
})

Cypress.Commands.add('readExcelRaw', (filePath, sheetName) => {
  return cy.readFile(filePath, 'binary').then((data) => {
    const workbook = XLSX.read(data, { type: 'binary' });
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
  });
});

Cypress.Commands.add('readExcelRaw', (filePath, sheetName) => {
    return cy.readFile(filePath, 'binary').then((data) => {
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheet = workbook.Sheets[sheetName];
      // Directly return the raw data as a 2D array
      return XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true });
    });
  });

// custom command for clicking link using lable(lable means text present in html )

Cypress.Commands.add('clickLink',(label)=> {
    cy.get("a").contains(label).click();
})



//custom command for login

Cypress.Commands.add('loginapp',(email,password)=> {
    cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(email);
    cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(password);
    cy.get(".oxd-button").click();
})

