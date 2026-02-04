describe('first test suite', function()
{
    it('first test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url but in browser, cupress get act like findElement of selenuim

        // 1st way
        cy.get('.product:visible').should('have.length',4)
        // 2ed way Parent child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        // we can also do like this
        cy.get('.products').as('producstLocster') // i give name the call it by the name
        cy.get('@producstLocster').find('.product').should('have.length', 4)

        // 1st way
        cy.get('@producstLocster').find('.product').eq(2).contains('ADD TO CART').click().then(function()
        {
            console.log('sf')
        })

        // 2ed way locater frome the cypress and just click, but it can be breaks in case more proudects added
        cy.get(':nth-child(3) > .product-action > button').click()


        cy.get('@producstLocster').find('.product').each(($el, index, $list) => {
            const testVeg = $el.find('h4.product-name').text()
            if(testVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })

        //assert if logo text is correctlly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs
        cy.get('.brand').then(function(logoelement)
        {
            cy.log(logoelement.text())

        })
        //const logo=cy.get('.brand')
        //cy.log(cy.get('.brand').text())
        // cy.log(logo.text())

    

    })
})
