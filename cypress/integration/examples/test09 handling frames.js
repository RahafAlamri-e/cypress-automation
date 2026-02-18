/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Ninth test suite', function()
{
    it('frame test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#courses-iframe')
        .should('be.visible')
        .invoke('attr', 'src')
        .should('not.be.empty')
        .then((src) => {
            const iframeOrigin = new URL(src).origin
            const iframePath = new URL(src).pathname || '/'

            cy.origin(
            iframeOrigin,
            { args: { iframePath } },
            ({ iframePath }) => {
                cy.visit(iframePath)
                cy.get('a[href="mentorship"]').eq(0).click()
            }
            )
        })
    })
})
