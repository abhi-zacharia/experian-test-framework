class YourFinance_PO {
    yourFinancePage() {
        cy.get('#annualIncomeGross').type(data.gross_annual_income).clear();
        cy.get('#annualIncomeGross').type(data.gross_annual_income);
        cy.get('#residentialStatus').select(data.Residential_status);
        cy.get('#employmentStatus').select(data.Employment_status);
        cy.get('#employmentTitle').type(data.describe_your_job).clear();
        cy.get('#employmentTitle').type(data.describe_your_job);
        cy.get('#employmentIndustry').click();
        cy.get('#employmentIndustry').type(data.type_of_industry).clear();
        cy.get('#employmentIndustry').type(data.type_of_industry);
        cy.get('.c-form-input-autocomplete__list__item:nth-child(1) > .c-form-input-autocomplete__list__button').click();
        cy.get('.c-radio-button:nth-child(2) > .c-radio-button--circle__button').click();
        cy.get('.c-button > span').click({ multiple: true }, { timeout: 8000 });
        cy.get('.c-page-header__mobile-step-indicator__title').click();
        cy.get('.c-page-header__mobile-step-indicator__title').should('contain', ' Your results ')
    }

}
export default YourFinance_PO;