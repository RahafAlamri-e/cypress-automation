describe('Third test suite', function()
{
    it('first test case',function()
    {
        // checkbox
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        // static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')

        // dynamic dropdown
        // 1st way
        cy.get('#autocomplete').clear().type('sau').get('.ui-menu-item div').contains('Saudi Arabia').click()
        cy.get('#autocomplete').should('have.value', 'Saudi Arabia')
        // 2ed way
        cy.get('#autocomplete').clear().type('sau')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='Saudi Arabia'){
                $el.click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Saudi Arabia')

        // check visiblity
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button
        cy.get('[for="radio1"] > [value="radio1"]').check().should('be.checked')
        cy.get('[for="radio2"] > [value="radio2"]').check().should('be.checked')
        cy.get('[for="radio1"] > [value="radio1"]').should('not.be.checked')


    })
})
