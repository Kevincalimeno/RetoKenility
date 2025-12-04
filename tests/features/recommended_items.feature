Feature: Recommended items interaction in AutomationExercise
  As a user
  I want to add products from the recommended items section
  So that I can quickly discover popular items

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @recommended @happy @test22
  Scenario: Add Product From Recommended Items
    When the user scrolls to the recommended items section
    And adds one recommended product to the cart
    And the user goes to the cart
    Then the product should appear in the cart
