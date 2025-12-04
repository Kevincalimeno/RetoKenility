require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { randomEmail } = require('../../utils/dataGenerator');

let searchedProduct;

When('the user Cart clicks', async () => {
  await cartPage.openCart();
  await productsPage.clickHere();
});

When('the user scrolls to the footer', async () => {
  await subscriptionPage.scrollToFooter();
});

Then('the section cart SUBSCRIPTION {string} is visible', async ({}, sectionName) => {
  if (sectionName === "SUBSCRIPTION") {
    await subscriptionPage.verifySubscriptionSectionVisible();
  }
});

When('the user clicks "Products"', async () => {
  await productsPage.openProductsPage();
});

When('adds the first product to the cart', async () => {
  await productsPage.addFirstProductToCart();
});

When('adds the second product to the cart', async () => {
  await productsPage.addSecondProductToCart();
});

When('clicks View Cart', async () => {
  await productsPage.goToCart();
});

Then('both products are visible in the cart with correct prices, quantities and totals', async () => {
  await cartPage.verifyProductsVisible();
  await cartPage.verifyPricesQuantitiesTotals();
});

When('the user opens a product detail page', async () => {
  await productDetailPage.openProductByIndex(4);
});

Then('the product detail is visible', async () => {
  await productDetailPage.verifyProductDetailVisible();
});

When('the user sets quantity to {int}', async ({}, qty) => {
  await productDetailPage.setQuantity(qty);
});

When('clicks Add to cart', async () => {
  await productDetailPage.addToCart();
});

When('clicks View Cart quantity', async () => {
  await productsPage.goToCart();
});

Then('the product is displayed in the cart with quantity {int}', async ({}, qty) => {
  await cartPage.verifyQuantity(qty);
});

When('the user removes the product from the cart', async () => {
  await cartPage.removeFirstProduct();
});

Then('the cart should be empty', async () => {
  await cartPage.verifyCartIsEmpty();
});

Given('the user opens the Products page', async () => {
  await productsPage.openProductsPage();
});

Given('the user is on the Products page', async () => {
  await productsPage.openProductsPage();
});

When('the user searches for the product {string}', async ({}, searchTerm) => {
  await productsPage.searchProduct(searchTerm);
  searchedProduct = await productsPage.getFirstProductName();
});

When('the user adds the first search result to the cart', async () => {
  await productsPage.addFirstSearchResultToCart();
});

When('the user proceeds to the cart after search', async () => {
  await productsPage.goToCart();
});

When('the user creates a new account from cart', async () => {
  await cartPage.clickSignupLogin();
  await signupPage.signupNewUser(global.testEmail, "TestUser", global.testPassword);
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
});

When('the user adds any product to the cart', async () => {
  await productsPage.openProductsPage();
  await productsPage.addFirstProductToCart();
});

Then('the product should still be in the cart', async () => {
  await productsPage.goToCart();
  await cartPage.verifyProductInCart(searchedProduct);
});

When('the user clicks Proceed To Checkout', async () => {
  await cartPage.clickProceedToCheckout();
});