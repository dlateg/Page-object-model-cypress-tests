class SearchPage {
    getSearchButton() {
        return cy.get('.site-nav__btn--search-menu');
    }
    getSearchField(){
        return cy.get('input');
    }

    }
    export default SearchPage