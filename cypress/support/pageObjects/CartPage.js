const ConfirmationPage = require("./ConfirmationPage")

class CartPage {
    checkTheTotal() {
        let sum = 0
        cy.get('td:nth-child(4) strong').each($el => {
            const amountText = $el.text().split(' ')[1].trim()
            const amountNumber = Number(amountText)
            sum = sum + amountNumber
        }).then(() => {
            cy.get('h3 strong').then($elem => {
                let actualTotal = Number($elem.text().split(' ')[1].trim())
                expect(sum).to.be.equal(actualTotal)
            })
        })
        // let sum = 0
        // cy.get('td:nth-child(4) strong')
        //     .each(($el) => {
        //         sum += Number($el.text().split(' ')[1].trim())
        //     })
        //     .then(() => {

        //         cy.get('h3 strong')
        //             .invoke('text')
        //             .then(text => {

        //                 const actualTotal = Number(text.split(' ')[1].trim())

        //                 expect(sum).to.equal(actualTotal)

        //             })
        //     })

        return this
    }

    goToConfirmation() {
        cy.contains('button', 'Checkout').click()
        return new ConfirmationPage()
    }
}
module.exports = CartPage
