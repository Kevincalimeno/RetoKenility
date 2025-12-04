Feature: Scroll behavior validation in AutomationExercise
  As a user
  I want to scroll up and down the page
  So that I can view content and return to the top easily

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @scroll @happy @test25
  Scenario: Verify Scroll Up Using Arrow Button
    Given the user scrolls to the bottom of the page
    When the user clicks the scroll-up arrow
    Then the page title should be visible at the top

  @regression @scroll @happy @test26
  Scenario: Verify Scroll Up Without Arrow Button
    Given the user scrolls to the bottom of the page
    When the user scrolls manually to the top
    Then the page header should be visible again
