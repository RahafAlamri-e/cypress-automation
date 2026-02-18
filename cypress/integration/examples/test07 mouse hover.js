describe('Seventh test suite', function()
{
    it('first test case',function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // when we need to verify the oppenig pop up
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')

        // when we force the click for heddin element
        cy.contains('Top').click({force: true}).url().should('include', 'top')


    })
})
