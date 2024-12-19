/// <reference types="cypress" />
import 'cypress-iframe'
describe('Handling iFrames', () =>{

    it('iFrames', () =>{

        cy.visit("https://jqueryui.com/droppable/")
        cy.frameLoaded('.demo-frame')
        cy.iframe().find('#draggable').then(function(res){

            const frmValue = res.text()
            expect(frmValue).to.contain('Drag me to my target')
            cy.log(frmValue)
        })

    })

})