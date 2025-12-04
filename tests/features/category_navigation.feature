Feature: Category navigation in AutomationExercise
  As a user
  I want to browse products by category and subcategory
  So that I can view products more efficiently

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @category @happy @test18
  Scenario: View Category Products
    When the user selects a category from the sidebar
    When the user selects a subcategory
    Then products from that subcategory should be displayed
