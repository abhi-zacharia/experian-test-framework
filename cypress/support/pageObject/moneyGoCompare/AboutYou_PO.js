class AboutYou_PO {

    aboutYouPage() {
        cy.get('#title').select(data.title);
        cy.get('#firstName').type(data.first_name).clear();
        cy.get('#firstName').type(data.first_name);
        cy.get('#lastName').type(data.last_name).clear();
        cy.get('#lastName').type(data.last_name);
        cy.get('#dateOfBirth__day').type(data.dob_day).clear();
        cy.get('#dateOfBirth__day').type(data.dob_day);
        cy.get('#dateOfBirth__month').type(data.dob_month).clear();
        cy.get('#dateOfBirth__month').type(data.dob_month);
        cy.get('#dateOfBirth__year').type(data.dob_year).clear();
        cy.get('#dateOfBirth__year').type(data.dob_year);
        cy.get('#email').type(data.email).clear();
        cy.get('#email').type(data.email);
        cy.get("#phoneNumber").type(data.phone_number).clear();
        cy.get("#phoneNumber").type(data.phone_number);
        cy.get('#address-searchsearch-postcode').type(data.postcode).clear();
        cy.get('#address-searchsearch-postcode').type(data.postcode);
        cy.get('.c-button > span').click();
        cy.get('.c-form-address-search__addresses__list__item:nth-child(1) > .c-form-address-search__addresses__list__button').click();
        cy.get('.c-form-address-search__addresses__list__item:nth-child(1) > .c-form-address-search__addresses__list__button').should('contain', 'Flat 1 Hertford Court 2B Vicarage Lane, London E6 ');
        cy.get('app-form-question:nth-child(8) .c-radio-button:nth-child(4) .c-radio-button--lozenge__name').click();
        cy.get('.c-button--primary').click({ multiple: true }, { timeout: 8000 });
        cy.get('.c-page-header__mobile-step-indicator__title').should('contain', 'Your finances');
    }
}
export default AboutYou_PO;