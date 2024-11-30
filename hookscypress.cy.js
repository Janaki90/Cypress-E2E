describe('hooks', ()=>{

    before(() => {
      cy.log('**********LAUNCH APP*********');
      
      //runs once before all tests in the block
    })
  
    after(() => {
      //runs once after all tests in the block
      cy.log('**********CLOSE APP*********');
    })

    beforeEach(() => {
        
        cy.log('**********Login*********');
        
        //runs once before all tests in the block
      })
    
    afterEach(() => {
        
        cy.log('**********Logout*********');
        
        //runs once before all tests in the block
      })

    
    it('search', ()=> {

        cy.log('**********Searching*********');

    })

    it('advanced search', ()=> {

        cy.log('**********Advanced Searching*********');

    })

    
    

})


