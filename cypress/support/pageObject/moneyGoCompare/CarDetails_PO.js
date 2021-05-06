class CarDetails_PO {
    visitHomePage() {
        cy.visit(Cypress.env("moneyGoCompareURL"))
    }
    carDetailsPage() {

        cy.get('#car-registration-search').type(data.VRN);
        cy.get('.c-button > span').click();
        cy.get('div > strong').should('contain', 'VOLKSWAGEN PASSAT SE TDI 140 ');
        cy.get('#value').type(data.advertised_price).clear();
        cy.get('#value').type(data.advertised_price);
        cy.get('#depositAmount').type(data.deposit).clear();
        cy.get('#depositAmount').type(data.deposit);
        cy.get('#currentMileage').type(data.current_mileage).clear();
        cy.get('#currentMileage').type(data.current_mileage);
        cy.get('#futureMileage').type(data.expected_annual_mileage).clear();
        cy.get('#futureMileage').type(data.expected_annual_mileage);
        cy.get('select').select(data.loan_duration);
        cy.get('.c-button--primary').click({ multiple: true }, { timeout: 8000 });
        cy.get('.c-button > span').click();
        cy.get('.c-page-header__mobile-step-indicator__title').should('contain', ' About you ');


    }
    carDetailsPage1(vRN, advertised_Price, deposit, current_Mileage, expected_Annual_Mileage,
        loan_Duration, $selector1, text1ToLocate, $selector2, text2ToLocate) {

        cy.get('#car-registration-search').type(vRN);
        cy.get('.c-button > span').click();
        cy.get('div > strong').contains('VOLKSWAGEN PASSAT SE TDI 140 ');
        cy.get('#value').type(advertised_Price).clear();
        cy.get('#value').type(advertised_Price);
        cy.get('#depositAmount').type(deposit).clear();
        cy.get('#depositAmount').type(deposit);
        cy.get('#currentMileage').type(current_Mileage).clear();
        cy.get('#currentMileage').type(current_Mileage);
        cy.get('#futureMileage').type(expected_Annual_Mileage).clear();
        cy.get('#futureMileage').type(expected_Annual_Mileage);
        cy.get('select').select(loan_Duration);
        cy.get('.c-button--primary').click();
        cy.get('.c-button > span').click({ multiple: true }, { timeout: 8000 });
        cy.get('.c-page-header__mobile-step-indicator__title').contains(' About you ');
    }


}

export default CarDetails_PO;