/// <reference types="cypress" />

describe('home page test', () =>{

    beforeEach( () => {
        cy.visit('https://www.klarna.com/uk/')  
    })
    it('shopping test', () =>{       

        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.announcement__dismiss > svg').click()
        cy.get('.ab-close').click()
        
        cy.contains('Log in').click()

        cy.contains('Continue in app').click()
        //cy.url().should('include', 'public')
       
        cy.contains('United Kingdom').should('have.text','United Kingdom')
        cy.contains('Privacy Policy').should('exist')
        cy.contains('Terms').should('exist')

    })

    it('login test', () =>{
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.announcement__dismiss > svg').click()
        cy.get('.ab-close').click()
        
        cy.contains('Log in').click()
    })
})