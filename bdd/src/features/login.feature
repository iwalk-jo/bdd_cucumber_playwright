Feature: As a user I expect to be able to navigate to the login page

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to be able to view my login page
    Given I am on the "login" page
    And the text "Please log in" should be displayed
    Then the "login" page should contain the text "Log in"
