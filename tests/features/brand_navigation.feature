Feature: Brand navigation in AutomationExercise
  As a user
  I want to filter products by brand
  So that I can view brand-specific products

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @brand @happy @test19
  Scenario: View and Cart Brand Products
    When the user selects a brand from the brand list
    Then only the products of that brand should be displayed
    When the user adds a brand product to the cart
    And the user goes to the cart
    Then the cart should contain that brand product
