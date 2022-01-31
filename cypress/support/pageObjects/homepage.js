class HomePage {
    getLangButton() {
        return cy.get('[aria-label="Location Selector"]');
    }
    getEnglishUS(){
        return cy.get('#region0 > .pt-3 > :nth-child(18) > .row > .d-block > .heading-5');
    }

    }
    export default HomePage
    