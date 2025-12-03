Feature: Contact Us Form on AutomationExercise
  As a user
  I want to submit the Contact Us form
  So that I can send inquiries successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @contact @happy @test6
  Scenario: Submit contact us form successfully
    When the user navigates to contact "Contact us"
    Then the contact section "Get In Touch" is visible
    And the user fills the contact form with valid data
    And the user uploads a file "unnamed.jpg"
    And the user submits the contact form
    Then the contact success message is visible
    When the user returns to home
    Then the home page is displayed successfully
