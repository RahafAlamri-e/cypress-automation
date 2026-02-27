const ProductPage = require("./ProductPage")

class HomePage {
    goTo(url) {
        cy.visit(url)
    }
    
    login() {
        // cy.get('.nav-link').contains('Shop').click()
        cy.contains('Shop').click()
        return new ProductPage()
    }
}
module.exports = HomePage
