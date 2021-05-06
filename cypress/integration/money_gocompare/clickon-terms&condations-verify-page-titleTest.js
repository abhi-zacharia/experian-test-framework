/// <reference types="cypress" />
describe("Click on Terms & condition link in the website footer & verify the page title", () => {

    it("Click on the footer Terms & Condation link", () => {
        cy.visit("https://money.gocompare.com/vehiclefinance#/car-details")
        cy.contains('Terms and conditions')
        const test = cy.contains('a', 'Terms and conditions').invoke('removeAttr', 'target').click({ force: true })
        cy.assert(test, 'its OK')

    });
    it("Click on the footer Terms & Condation link", () => {
        cy.visit("https://www.gocompare.com/about/terms/?contentonly=true")
        cy.get('.hero__heading').should('contain', 'Terms and conditions')
    });

});