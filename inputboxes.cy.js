describe('Input textbox', function(){

    it('Input textbox', function(){
  
     cy.visit('https://www.rediffmailpro.com/cgi-bin/login.cgi')
  
     
  
      cy.get('#useremail').type('janakinavanee@gmail.com')
      cy.wait(2000)
      cy.get('[type="password"]').type('janaki@90')
      cy.wait(2000)
      cy.get('[type="submit"]').click()
  })
  }
  )