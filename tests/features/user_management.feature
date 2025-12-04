Feature: User Management on AutomationExercise
  As a user
  I want to register, login and logout
  So that I can manage my account successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @register @happy @test1
  Scenario: Register a new user successfully
    When the user navigates to "Signup / Login"
    And the login section "New User Signup!" is visible
    And the user enters a new name and email
    And clicks "Signup"
    Then the signup section "ENTER ACCOUNT INFORMATION" is visible

    When the user completes the account information form
    And selects the newsletter and special offers options
    And fills the personal and address details
    And clicks "Create Account"
    Then the login message "ACCOUNT CREATED!" is visible

    When the user clicks "Continue"
    Then the login message "Logged in as username" is visible

    When the user clicks "Delete Account"
    Then the login message "ACCOUNT DELETED!" is visible
    And clicks "Continue"

  @regression @login @happy @test2
  Scenario: Login with correct email and password
    When the user navigates to "Signup / Login"
    And the login section "New User Signup!" is visible
    And the user enters a new name and email
    And clicks "Signup"
    Then the signup section "ENTER ACCOUNT INFORMATION" is visible

    When the user completes the account information form
    And selects the newsletter and special offers options
    And fills the personal and address details
    And clicks "Create Account"
    Then the login message "ACCOUNT CREATED!" is visible

    When the user clicks "Continue"
    And the user clicks "Logout"
    And the login account section "Login to your account" is visible
    And the user enters valid credentials
    And clicks "Login"
    Then the login message "Logged in as username" is visible

    When the user clicks "Delete Account"
    Then the login message "ACCOUNT DELETED!" is visible

  @regression @login @negative @test3
  Scenario: Login with incorrect email and password
    When the user navigates to "Signup / Login"
    And the login account section "Login to your account" is visible
    And the user enters invalid credentials
    And clicks "Login"
    Then the error "Your email or password is incorrect!" is visible

  @regression @logout @happy @test4
  Scenario: Logout user after successful login
    When the user navigates to "Signup / Login"
    And the login section "New User Signup!" is visible
    And the user enters a new name and email
    And clicks "Signup"
    Then the signup section "ENTER ACCOUNT INFORMATION" is visible

    When the user completes the account information form
    And selects the newsletter and special offers options
    And fills the personal and address details
    And clicks "Create Account"
    Then the login message "ACCOUNT CREATED!" is visible

    When the user clicks "Continue"
    And the user clicks "Logout"
    And the login account section "Login to your account" is visible
    And the user enters valid credentials
    And clicks "Login"
    Then the login message "Logged in as username" is visible

    When the user clicks "Logout"
    Then the login page is displayed

 @regression @register @negative @test5
Scenario: Register user with existing email
  When the user navigates to "Signup / Login"
  And the login section "New User Signup!" is visible
  And the user enters an existing name and email
  And clicks "Signup"
  Then the error "Email Address already exist!" is visible
