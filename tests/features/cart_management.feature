Feature: Cart management and subscription validation on AutomationExercise
  As a user
  I want to add, remove and manage products in the cart
  So that I can prepare my order before checkout

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @subscription @happy
  Scenario: Verify subscription in home page
    When the user scrolls to the footer
    Then the section "SUBSCRIPTION" is visible

    When the user enters an email and submits subscription
    Then the message "You have been successfully subscribed!" is visible

  @regression @subscription @happy
  Scenario: Verify subscription in cart page
    When the user clicks "Cart"
    And the user scrolls to the footer 
    Then the section "SUBSCRIPTION" is visible

    When the user enters an email and submits subscription
    Then the message "You have been successfully subscribed!" is visible

  @regression @cart @happy
  Scenario: Add multiple products to the cart
    When the user clicks "Products"
    And adds the first product to the cart
    And clicks "Continue Shopping"
    And adds the second product to the cart
    And clicks "View Cart"
    Then both products are visible in the cart with correct prices, quantities and totals

  @regression @cart @happy
  Scenario: Verify product quantity in cart
    When the user opens a product detail page
    Then the product detail is visible

    When the user sets quantity to 4
    And clicks "Add to cart"
    And clicks "View Cart"
    Then the product is displayed in the cart with quantity 4

  @regression @cart @negative
  Scenario: Remove a product from the cart
    When the user adds products to the cart
    And clicks "Cart"
    Then the cart page is displayed

    When the user removes a product from the cart
    Then the product is removed successfully

  @regression @search @cart
  Scenario: Search products and verify cart after login
    When the user clicks "Products"
    Then the user is navigated to the "ALL PRODUCTS" page

    When the user searches for a product by name
    Then the section "SEARCHED PRODUCTS" is visible
    And all related products are displayed

    When the user adds the searched products to the cart
    And clicks "Cart"
    Then the products are visible in the cart

    When the user logs in from "Signup / Login"
    And navigates back to the cart
    Then the same products remain visible in the cart

  @regression @cart @happy
  Scenario: Add product to cart from Recommended Items
    When the user scrolls to the bottom of the page
    Then the section "RECOMMENDED ITEMS" is visible

    When the user adds a recommended product to the cart
    And clicks "View Cart"
    Then the product is visible in the cart

