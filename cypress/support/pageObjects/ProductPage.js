const CartPage = require("./CartPage")

class ProductPage {
    pageValidation() {
        cy.contains('Shop Name').should('be.visible')
        return this
    }

    verifyCardLimit() {
        cy.get('app-card').should('have.lengthOf', 4)
        return this
    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click()
        return this
    }

    selectProduct(productName) {
        // cy.get('app-card').filter(':contains(' + productName + ')')
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()
            })
        return this
    }

    goToCart() {
        cy.contains('a', 'Checkout').click()
        return new CartPage()
    }
}
module.exports = ProductPage
