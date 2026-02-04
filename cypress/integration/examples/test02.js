describe('second test suite', function()
{
    it('first test case',function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url but in browser, cupress get act like findElement of selenuim

        cy.get('.products').as('producstLocster') // i give name the call it by the name
        cy.get('@producstLocster').find('.product').each(($el, index, $list) => {
            const testVeg = $el.find('h4.product-name').text()
            if(testVeg.includes('Cashews')){
                $el.find('button').click()
            }
        })

        cy.get('cart-icon').click
    })
})
