Feature: Order management and checkout process in AutomationExercise
  As a user
  I want to create orders and validate all checkout steps
  So that I can complete purchases successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @order @happy @test14
  Scenario: Place Order Registering While Checkout
    Given the user adds a product to the cart
    When the user proceeds to checkout
    And the user selects to register during checkout
    And the user completes the signup form
    Then the account should be created successfully
    When the user continues to checkout
    And the user enters valid payment information
    Then the order should be placed successfully

  @regression @order @happy @test15
  Scenario: Place Order Registering Before Checkout
    Given the user registers a new account
    When the user adds a product to the cart
    And the user proceeds to checkout
    And the user enters valid payment information
    Then the order confirmation should be visible

  @regression @order @happy @test16
  Scenario: Place Order Login Before Checkout
    Given the user logs in with an existing account
    When the user adds a product to the cart
    And proceeds to checkout
    And enters valid payment information
    Then the purchase should be completed

  @regression @order @happy @test24
  Scenario: Download Invoice After Purchase
    Given the user adds a product to the cart
    When the user proceeds to checkout
    And the user selects to register during checkout
    And the user completes the signup form
    Then the account should be created successfully
    When the user continues to checkout
    Then the delivery address should match the registered data
    And the billing address should match the registered data
    Given the user completes a purchase with valid payment details
    When the user clicks the Download Invoice button
    Then the invoice file should download successfully




