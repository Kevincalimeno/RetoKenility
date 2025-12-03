Feature: Navigate Through Test Cases
  As a user
  I want to open specific test cases
  So that I can review their descriptions successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @navigation @test7
  Scenario: Open Test Case 1
    When the user navigates to testcases "Test Cases"
    And the user opens test case "Test Case 1: Register User"
    Then the test case content is visible
