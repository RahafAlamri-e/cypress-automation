describe('fifth test suite', function()
{
    it('first test case',function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
            cy.origin(url, ()=>{
                cy.get('.sub-menu-bar a[href="about.html"]').click()
                cy.get('.mt-50 h2').should('contain', 'QAClick')
        })
        })

        /// u have to be storing and worl hard and i belive i will be somting big in future 

    })
})
