Feature: Checkout and order placement on AutomationExercise
  As a user
  I want to complete checkout with or without registration
  So that I can place orders successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @checkout @register
  Scenario: Place order registering during checkout
    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user clicks "Proceed To Checkout"
    And clicks "Register / Login"
    And creates a new account
    Then the message "ACCOUNT CREATED!" is visible 

    When the user clicks "Continue"
    Then the message "Logged in as username" is visible

    When the user clicks "Cart"
    And clicks "Proceed To Checkout"
    Then the address details and order review are visible

    When the user enters a comment
    And clicks "Place Order"
    And enters valid payment details
    And clicks "Pay and Confirm Order"
    Then the message "Your order has been placed successfully!" is visible

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

  @regression @checkout @register
  Scenario: Place order registering before checkout
    When the user clicks "Signup / Login"
    And creates a new account
    Then the message "ACCOUNT CREATED!" is visible
    And the message "Logged in as username" is visible

    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user clicks "Proceed To Checkout"
    Then the address details and order review are visible

    When the user enters a comment
    And clicks "Place Order"
    And enters valid payment details
    And clicks "Pay and Confirm Order"
    Then the message "Your order has been placed successfully!" is visible

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

  @regression @checkout @login
  Scenario: Place order logging in before checkout
    When the user clicks "Signup / Login"
    And logs in with valid credentials
    Then the message "Logged in as username" is visible

    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user clicks "Proceed To Checkout"
    Then the address details and order review are visible

    When the user enters a comment
    And clicks "Place Order"
    And enters valid payment details
    And clicks "Pay and Confirm Order"
    Then the message "Your order has been placed successfully!" is visible

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

  @regression @checkout @address
  Scenario: Verify address details in checkout page
    When the user creates a new account
    Then the message "ACCOUNT CREATED!" is visible
    And the message "Logged in as username" is visible

    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user clicks "Proceed To Checkout"
    Then the delivery and billing address match the registration data

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

  @regression @checkout @invoice
  Scenario: Download invoice after placing an order
    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user clicks "Proceed To Checkout"
    And clicks "Register / Login"
    And creates a new account
    Then the message "ACCOUNT CREATED!" is visible

    When the user clicks "Continue"
    Then the message "Logged in as username" is visible

    When the user clicks "Cart"
    And clicks "Proceed To Checkout"
    Then the address details and order review are visible

    When the user enters a comment
    And clicks "Place Order"
    And enters valid payment details
    And clicks "Pay and Confirm Order"
    Then the message "Your order has been placed successfully!" is visible

    When the user downloads the invoice
    Then the invoice is downloaded successfully

    When the user clicks "Delete Account"
    Then the message "ACCOUNT DELETED!" is visible

