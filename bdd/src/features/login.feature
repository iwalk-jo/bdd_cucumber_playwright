Feature: As a user I expect to be able to navigate to the login page

  @dev
  @smoke
  @regression
  Scenario: As a user I expect to be able to view the login page
    Given I am on the "login" page
    And the "header logo" should be displayed
    Then the "login header" should contain the text "Welcome to twoMatches"

# And the "header logo" should be displayed
# Then the "login" page should contain the text "Log in"