describe('End to End ecommerce test', function () {

    it('Submit Order', function () {

        const productName = 'Nokia Edge'

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // cy.get('.nav-link').contains('Shop').click()
        cy.contains('Shop').click()
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.lengthOf', 4)
        // cy.get('app-card').filter(':contains(' + productName + ')')
        cy.get('app-card').filter(`:contains("${productName}")`)
            .then($element => {
                cy.wrap($element).should('have.length', 1)
                cy.wrap($element).contains('button', 'Add').click()
            })

        cy.get('app-card').eq(0).contains('button', 'Add').click()
        cy.contains('a', 'Checkout').click()

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
        cy.contains('button', 'Checkout').click()
        cy.get('#country').type('Cyprus')
        cy.wait(2000)
        cy.get('.suggestions ul li a').click()
        cy.contains('input', 'Purchase').click()
        cy.get('.alert-success').should('contain', 'Success!')
    })
})
