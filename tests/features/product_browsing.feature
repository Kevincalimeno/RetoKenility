Feature: Product browsing and details on AutomationExercise
  As a user
  I want to browse and search products
  So that I can view product information and find items of interest

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @products @happy
  Scenario: View all products and product detail page
    When the user clicks "Products"
    Then the user is navigated to the "ALL PRODUCTS" page
    And the products list is visible

    When the user clicks "View Product" for the first product
    Then the user is navigated to the product detail page
    And the product details are visible: name, category, price, availability, condition, brand

  @regression @products @search @happy
  Scenario: Search for a product
    When the user clicks "Products"
    Then the user is navigated to the "ALL PRODUCTS" page

    When the user searches for a product by name
    Then the section "SEARCHED PRODUCTS" is visible
    And all related products are displayed

  @regression @category @happy
  Scenario: View category products
    When the categories section is visible
    And the user selects the "Women" category
    And selects a sub-category under Women
    Then the category page is displayed with the correct title

    When the user selects a sub-category under the "Men" category
    Then the user is navigated to the corresponding category page

  @regression @brand @happy
  Scenario: View and browse products by brand
    When the user clicks "Products"
    Then the brands list is visible

    When the user selects a brand
    Then the user is navigated to the brand page
    And the brand products are displayed

    When the user selects another brand
    Then the user is navigated to that brand page
    And its products are displayed

  @regression @review @happy
  Scenario: Add a review to a product
    When the user clicks "Products"
    Then the user is navigated to the "ALL PRODUCTS" page

    When the user clicks "View Product"
    Then the section "Write Your Review" is visible

    When the user submits a review with name, email and message
    Then the message "Thank you for your review." is visible
