/// <reference types="cypress" />
describe("Open GoCompare URL", () => {
    it("Should open when click on URL", () => {
        cy.visit("https://money.gocompare.com/vehiclefinance#/car-details")
        cy.title('c-page-header__bar__heading > a').should('contain', 'Go Compare Money | Car Finance')


    });

});