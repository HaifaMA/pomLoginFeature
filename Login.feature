Feature: Login

@loginFields
    Scenario: Verify login fields are enabled by default
       Given I am on facebook landing page
       Then I verify login email field is enabled
          And I verify login password field is enabled
          And I verify login button is enabled

 @invalidLogin
    Scenario: Verify user gets error for invaloid credentials
    Given I am on facebook landing page
    When I enter "^%$$%$" in login email
    And I enter "abcd@1234" in login password
    And I click on login button
    Then I verify error messege is displayed