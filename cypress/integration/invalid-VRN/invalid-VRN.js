import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I type URL Go Compare website on the browser', () => {

    cy.visit("https://money.gocompare.com/vehiclefinance#/car-details")

})

When('I enters invalid VRN', () => {

    cy.get('#car-registration-search').type("VK56 UUU")
    cy.get('.c-button > span').click();

})

Then('I see an error message', () => {

    cy.get('.c-alert').should('contain', 'We are sorry but no vehicles could be found.')

})