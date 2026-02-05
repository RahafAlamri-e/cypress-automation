describe('fifth test suite', function()
{
    it('first test case',function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('[name="courses"] > tbody > tr > td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Master Selenium')){
                cy.get('[name="courses"] > tbody > tr > td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })


    })
})
