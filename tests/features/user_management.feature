Feature: User Management on AutomationExercise
  As a user
  I want to register, login and logout
  So that I can manage my account successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @register @happy
  Scenario: Register a new user successfully
    When the user navigates to "Signup / Login"
    And the section "New User Signup!" is visible
    And the user enters a new name and email
    And clicks "Signup"
    Then the section "ENTER ACCOUNT INFORMATION" is visible

    When the user completes the account information form
    And selects the newsletter and special offers options
    And fills the personal and address details
    And clicks "Create Account"
    Then the message "ACCOUNT CREATED!" is visible

    When the user clicks "Continue"
    Then the message "Logged in as username" is visible 

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible
    And clicks "Continue"

  @regression @login @happy
  Scenario: Login with correct email and password
    When the user navigates to "Signup / Login"
    And the section "Login to your account" is visible
    And the user enters valid credentials
    And clicks "Login"
    Then the message "Logged in as username" is visible

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

  @regression @login @negative
  Scenario: Login with incorrect email and password
    When the user navigates to "Signup / Login"
    And the section "Login to your account" is visible
    And the user enters invalid credentials
    And clicks "Login"
    Then the error "Your email or password is incorrect!" is visible

  @regression @logout @happy
  Scenario: Logout user after successful login
    When the user navigates to "Signup / Login"
    And the user enters valid credentials
    And clicks "Login"
    Then the message "Logged in as username" is visible

    When the user clicks "Logout"
    Then the login page is displayed
