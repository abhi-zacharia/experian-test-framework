Feature: Validating Invalid VRN
    As a new customer I enters a VRN
    I want to validate the VRN on the page
    So that I can procced further to complete vehicle details form

    Scenario: Invalid VRN
        Given I type URL Go Compare website on the browser
        When I enters invalid VRN
        Then I see an error message