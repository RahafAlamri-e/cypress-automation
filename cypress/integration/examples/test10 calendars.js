describe('tenth test suite', function()
{
    it('first test case',function()
    {
        const month = '6'
        const date = '20'
        const year = '2025'
        const expectedList = [month,date,year];

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('[href="#/offers"]').invoke('removeAttr', "target").click()
        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.get('.react-calendar__navigation__label').click()
        cy.contains('button', year).click()
        // cy.get('.react-calendar__decade-view__years').contains(year).click()
        cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
        cy.contains('abbr', date).click()
        // cy.get('.react-calendar__month-view__days__day').contains(date).click()


        //assertion
        // cy.get('input[type=date]:nth-child(1) ').should('have.value',year+'-0'+month+'-'+date)
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        })

    })
})
