const { HomePage, ProductPage, CartPage, ConfirmationPage } = require('../../support/pageObjects')
describe('End to End ecommerce test', function () {
    before(function () {
        cy.fixture("example").then(function (data) {
            this.data = data
        })
    })

    it('Submit Order', function () {

        // Cypress.config('defaultCommandTimeout', 6000) // when we need to use this timeout for all test
        const homePage = new HomePage()

        const productName = this.data.productName

        homePage.goTo('https://rahulshettyacademy.com/angularpractice/')
        homePage.login()
            .pageValidation()
            .verifyCardLimit()
            .selectProduct(productName)
            .selectFirstProduct()
            .goToCart()
            .checkTheTotal()
            .goToConfirmation()
            .enterCountry('Cyprus')
            .checkout()

    })
})
