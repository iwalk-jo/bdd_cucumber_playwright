Feature: As a user I expect to be able to navigate to the login page


  Scenario: As a user I expect to be able to view my login page
    Given I am on the login page
    Then the login page should contain the text Login

# Scenario: As a user I expect to be able to view my login page
#   Given I am on the "login" page
#   And the "login form" should be displayed
#   Then the "login" page should contain the text "Log in"

# Scenario: Create an account link
#   Given I view 'http://twomatches.local:3000/login'
#   When I click 'Create an account'
#   Then I expect to be on the accessibility page
