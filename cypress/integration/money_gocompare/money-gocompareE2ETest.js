import YourFinance_PO from '../../support/pageObject/moneyGoCompare/YourFinance_PO';
import AboutYou_PO from '../../support/pageObject/moneyGoCompare/AboutYou_PO';
import CarDetails_PO from '../../support/pageObject/moneyGoCompare/CarDetails_PO';
/// <reference types="cypress" />


describe("Money-GoCompareE2E Test", () => {
    const cardetails_PO = new CarDetails_PO();
    const aboutyou_PO = new AboutYou_PO();
    const yourfinance_PO = new YourFinance_PO();
    // Cypress.config('defaultCommandTimeout', 20000)
    before(function () {

        //cardetails_PO.visitHomePage();
        cy.visit("/")
        cy.fixture('data').then(function (data) {
            // this.data=data;
            globalThis.data = data;
        })
    })
    beforeEach(function () {

    })
    it("Should Navigate to car details page too fill the form", () => {
        cardetails_PO.carDetailsPage();
        // cardetails_PO.carDetailsPage1(data.VRN, data.advertised_price, data.deposit, data.current_mileage,
        //data.expected_annual_mileage, data.loan_duration);

    });
    it("Should navigate to About you Page to fill the form", () => {

        aboutyou_PO.aboutYouPage();

    })
    it("Should navigate to Your Finance Page to fill the form", () => {

        yourfinance_PO.yourFinancePage();

    })
    it("Should navigate to Your Finance Page to fill the form", () => {

        cy.get('.c-page-header__mobile-step-indicator__title').should('contain', ' Your results ')

    });

});

