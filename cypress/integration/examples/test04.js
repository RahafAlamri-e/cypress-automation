describe('forth test suite', function()
{
    it('first test case',function()
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        // window:alert event
        cy.on('window:alert',(str)=>{
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str)=> {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })


    })
})
