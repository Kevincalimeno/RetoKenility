Feature: Product review submission in AutomationExercise
  As a user
  I want to submit a review on a product
  So that I can share my feedback with other customers

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @review @happy @test21
  Scenario: Add Review On Product
    Given the user opens a product detail page
    When the user fills the review form with valid information
    And submits the review
    Then the success message should be displayed
