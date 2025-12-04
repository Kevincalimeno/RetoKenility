Feature: Address verification in checkout on AutomationExercise
  As a user
  I want to review my delivery and billing address during checkout
  So that I can ensure my order is sent to the correct location

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

@regression @address @happy @test23
Scenario: Verify Address Details In Checkout Page
  Given the user adds a product to the cart
  When the user proceeds to checkout
  And the user selects to register during checkout
  And the user completes the signup form
  Then the account should be created successfully
  When the user continues to checkout
  Then the delivery address should match the registered data
  And the billing address should match the registered data

