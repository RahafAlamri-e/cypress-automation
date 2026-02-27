class ConfirmationPage {
    enterCountry(countryName) {
        cy.get('#country').type(countryName)
        //Cypress.config('defaultCommandTimeout', 6000) //when we need to use this timeout for specific line
        cy.get('.suggestions ul li a', { timeout: 6000 }).click()
        return this
    }

    checkout() {
        cy.contains('input', 'Purchase').click()
        cy.get('.alert-success').should('contain', 'Success!')
    }
}
module.exports = ConfirmationPage
