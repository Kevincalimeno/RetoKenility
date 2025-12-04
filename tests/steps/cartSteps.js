const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();

const { randomEmail } = require('../../utils/dataGenerator');

// -------------------------
// CART PAGE SUBSCRIPTION
// -------------------------

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

// -------------------------
// TEST 12: MULTIPLE PRODUCTS
// -------------------------

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

// -------------------------
// TEST 13: QUANTITY VALIDATION
// -------------------------

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
