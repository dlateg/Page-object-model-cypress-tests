class SearchResults {
    getDateButton() {
        return cy.get('[aria-label="Sort by Date in descending order"]');
    }

    getFilterResults(){
        return cy.get('[data-value="Article"] > .coveo-facet-value-label > .coveo-facet-value-label-wrapper > .coveo-facet-value-checkbox');
    }

    getLinks() {
        return cy.get('[class="CoveoFieldValue wtw-listing-result-uri"]');
    }

    }
    export default SearchResults