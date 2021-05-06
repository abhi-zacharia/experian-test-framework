/// <reference types="cypress" />
describe("Verifying user should receive the error message When entering incorrect VRN", () => {
    it("Verifying incorrect VRN", () => {
        cy.visit("https://money.gocompare.com/vehiclefinance#/car-details")
        cy.get('#car-registration-search').type(Cypress.env("invalid_VRN"));
        cy.get('.c-button > span').click();
        cy.get('.c-alert').should('contain', 'We are sorry but no vehicles could be found.')

    });


});