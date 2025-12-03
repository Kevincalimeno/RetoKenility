Feature: Contact Us Form on AutomationExercise
  As a user
  I want to submit the Contact Us form
  So that I can send inquiries successfully

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @contact @happy
  Scenario: Submit the Contact Us form successfully
    When the user navigates to "Contact Us"
    And the section "GET IN TOUCH" is visible
    And the user fills the contact form with name, email, subject, and message
    And uploads a file
    And clicks "Submit"
    And confirms the alert
    Then the message "Success! Your details have been submitted successfully." is visible

    When the user clicks "Home"
    Then the home page is displayed successfully
