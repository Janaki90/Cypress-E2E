/// <reference types="Cypress" />


describe('Table test', function () {

    it('Table Test', function()
    {
     
     cy.visit('https://testautomationpractice.blogspot.com/')
 
     //check value presence anywhere in table
 
     cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')
     cy.wait(2000)
     cy.get('table[name=BookTable]').contains('td','Master In Java').should('be.visible')
     cy.wait(2000)
 
     //check value presence in specific row and column
 
     cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
     
     //verify the book name"Master in Java" whose author is Amod
     cy.get('table[name=BookTable] > tbody>tr td:nth-child(2)').each(($e1, index, $list) =>{
 
 
         const text=$e1.text()
         if(text.includes("Amod"))
         {
             cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)").eq(index).then(function(bname)
         {
             const bookName= bname.text()
             expect(bookName).to.equal("Master In Java")
         })
 
         
         }
     })
 
 })
 
     
 })