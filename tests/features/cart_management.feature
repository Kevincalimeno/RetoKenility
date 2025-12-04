Feature: Cart management and subscription validation on AutomationExercise
  As a user
  I want to add, remove and manage products in the cart
  So that I can prepare my order before checkout

  Background:
    Given the user opens the application at "http://automationexercise.com"
    And the home page is displayed successfully

  @regression @subscription @happy @test10
Scenario: Verify subscription in home page
  When the user scrolls to the footer1
  Then the "SUBSCRIPTION" is visible

  When the user enters an email and submits subscription
  Then the subscription message "You have been successfully subscribed!" is visible

  @regression @subscription @happy @test11
  Scenario: Verify subscription in cart page
    When the user Cart clicks
    And the user scrolls to the footer1 
    Then the section cart SUBSCRIPTION "SUBSCRIPTION" is visible

    When the user enters an email and submits subscription
    Then the subscription message "You have been successfully subscribed!" is visible


  @regression @cart @happy @test12
  Scenario: Add multiple products to the cart
    When the user Cart clicks
    And adds the first product to the cart
    And adds the second product to the cart
    And clicks View Cart
    Then both products are visible in the cart with correct prices, quantities and totals

  @regression @cart @happy @test13
  Scenario: Verify product quantity in cart
    When the user Cart clicks
    When the user opens a product detail page
    Then the product detail is visible

    When the user sets quantity to 4
    And clicks Add to cart
    And clicks View Cart quantity
    Then the product is displayed in the cart with quantity 4

    @regression @cart @happy @test17
  Scenario: Remove a product from the cart
    Given the user opens the Products page
    And adds the first product to the cart
    And clicks View Cart
    When the user removes the product from the cart
    Then the cart should be empty

  @regression @search @cart @signup @happy @test20
  Scenario: Search a product and verify cart persists after signup & login
    Given the user is on the Products page
    When the user searches for the product "Blue"
    And the user adds the first search result to the cart
    And the user proceeds to the cart after search
    And the user creates a new account from cart
    Then the product should still be in the cart