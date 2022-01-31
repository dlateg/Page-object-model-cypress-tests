import HomePage from '../../support/pageObjects/homepage';
import SearchPage from '../../support/pageObjects/searchpage';
import SearchResults from '../../support/pageObjects/searchresults';
const { should } = require('chai');

require('cypress-iframe')

const homepage = new HomePage;
const searchpage = new SearchPage;
const searchresults = new SearchResults;

describe('wtw', () => {

    Given('The language is changed to English US on teh homepage', () => {
        cy.visit('http://www.willistowerswatson.com/ICT');

        cy.get("body").then($body => {
           
                homepage.getLangButton().click()
                cy.contains('Americas').click();

                homepage.getEnglishUS().click()

        })
    })

     When('I search for IFRS 17', () => {   

                searchpage.getSearchButton().click()    
                searchpage.getSearchField().type('IFRS 17','{force: true}').type('{enter}')
                
    
            })

     And('Verify the seacrh page is displayed and order by date', () => {
            
                cy.url().should('include', 'Search#q=IFRS%2017')

                const path = 'sort=relevancy';

                cy.url().then(($url) => {
                if($url.includes(path)) {

                searchresults.getDateButton().should('exist').click()
                
            } 
                else  {
                cy.log("Already sorted by date")
      }
     })

})

     And('Filter the results by Article', () =>{

                searchresults.getFilterResults().click()
            
            });
     
     Then('Verify each link begins with the correct URL', () =>{

                const links = searchresults.getLinks()
                for (var i = 0; i < links.length; i++){
                expect.links[i].to.have.text('https://www.willistowerswatson.com/en-US/')
        }

        
        })
     })

    
   
  





    
    

     