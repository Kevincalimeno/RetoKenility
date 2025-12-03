Feature: Product browsing and details on AutomationExercise
  As a user
  I want to browse and search products
  So that I can view product information and find items of interest

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully
    And the user clicks Products "Products"

  @regression @products @happy @test8
  Scenario: View all products and product detail page
    Then the user is navigated to the "ALL PRODUCTS" page
    And the products list is visible

    When the user clicks "View Product" for the first product
    Then the user is navigated to the product detail page
    And the product details are visible: name, category, price, availability, condition, brand 

  @regression @products @search @happy @test9
  Scenario: Search for a product
    Then the user is navigated to the "ALL PRODUCTS" page

    When the user searches for a product by name
    Then the section SEARCHED PRODUCTS "SEARCHED PRODUCTS" is visible
    And all related products are displayed