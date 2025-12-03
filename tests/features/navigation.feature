Feature: Navigation and scroll behavior on AutomationExercise
  As a user
  I want to navigate and use scroll functionality
  So that I can access sections of the site easily

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @scroll
  Scenario: Verify scroll up using arrow button
    When the user scrolls down to the bottom of the page
    Then the section "SUBSCRIPTION" is visible

    When the user clicks the scroll-up arrow
    Then the text "Full-Fledged practice website for Automation Engineers" is visible at the top 

  @regression @scroll
  Scenario: Verify scroll up without arrow button
    When the user scrolls down to the bottom of the page
    Then the section "SUBSCRIPTION" is visible

    When the user scrolls manually to the top
    Then the text "Full-Fledged practice website for Automation Engineers" is visible at the top
