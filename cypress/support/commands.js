// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("carDetailsForm", (vRN, advertised_Price, deposit, current_Mileage, expected_Annual_Mileage,
    loan_Duration, $selector1, text1ToLocate, $selector2, text2ToLocate) => {
    cy.get('#car-registration-search').type(vRN);
    cy.get('.c-button > span').click();
    cy.get($selector1).contains(text1ToLocate);
    cy.get('#value').type(advertised_Price);
    cy.get('#depositAmount').type(deposit);
    cy.get('#currentMileage').type(current_Mileage);
    cy.get('#futureMileage').type(expected_Annual_Mileage);
    cy.get('select').select(loan_Duration);//'1 year'
    cy.get('.c-button--primary').click();
    cy.get('.c-button > span').click({ multiple: true }, { timeout: 8000 });
    cy.get($selector2).contains(text2ToLocate);
})


// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
