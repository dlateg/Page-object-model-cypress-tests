const { should } = require('chai');

require('cypress-iframe')


describe('wtw', () => {


    it('visit website', () => {
        cy.visit('http://www.willistowerswatson.com/ICT');

        cy.get("body").then($body => {
           
                cy.get('[aria-label="Location Selector"]').click()

                cy.contains('Americas').click();

                cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5').click()

        })
    })

     it('search for IFRS 17', () => {          
                cy.get('.site-nav__btn--search-menu').click()

                cy.get('input').type('IFRS 17','{force: true}').type('{enter}')
    
            })

     it('verify on search page and order by date if not ordered', () => {
                cy.url().should('include', 'Search#q=IFRS%2017')

                const path = 'sort=relevancy';

                cy.url().then(($url) => {
                if($url.includes(path)) {
                cy.get('[aria-label="Sort by Date in descending order"]').should('exist').click()
            } 
                else  {
                cy.log("Already sorted by date")
      }
     })

})

     it('filter by Article', () =>{
                cy.get('[data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox')
                .click()
            
            });
     
     it('verify links', () =>{
    
        //cy.get('[class="CoveoFieldValue wtw-listing-result-uri"]'
        const links = []
        const links = cy.get('[class="CoveoFieldValue wtw-listing-result-uri"]');
        cy.log(links)

   // const links = cy.get('[class="CoveoFieldValue wtw-listing-result-uri"]');
   // links.forEach((element) =>{
          //  expect(links).to.have.text('https://www.willistowerswatson.com/en-US/')
   // })
     })
    })
    
        //cy.get('[class="coveo-result-list-container coveo-list-layout-container"]').then($body =>{
          //  if(
                //links.contains('')
          //  )}
      //  }
            
            

     
    //cy.get('[class="coveo-list-layout CoveoResult"]').then($body => {
        // const array = cy.get('a.CoveoResultLink')
        //array.forEach(element => {

         //cy.get('a.CoveoResultLink').should('include','https://www.willistowerswatson.com/en-US/')

   
   
  





    
    

     