describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://demo.guru99.com/test/radio.html')  // Visit URL
      cy.get('input[value="Option 1"]').should('be.visible').should('not.be.checked') // visibility checked status
      cy.get('input[value="Option 2"]').should('be.visible').should('not.be.checked').click() // visibility checked status
      cy.wait(2000)
      cy.get('input[value="Option 1"]').should('be.visible').should('not.be.checked').click()
      cy.get('input[value="Option 2"]').should('be.visible').should('not.be.checked')
      cy.wait(2000)
      cy.get('input[value="Option 1"]').should('be.visible').should('be.checked')
      cy.get('input[value="Option 2"]').should('be.visible').should('not.be.checked')
      cy.get('input[value="Option 3"]').should('be.visible').should('not.be.checked').click()
      cy.wait(2000)
      cy.get('input[value="checkbox1"]').should('be.visible').should('not.be.checked').click()
      
    })
  })