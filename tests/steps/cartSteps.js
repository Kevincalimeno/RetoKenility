const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailPage = require('../pages/ProductDetailsPage');
const CartPage = require('../pages/CartPage');
const SubscriptionPage = require('../pages/SubscriptionPage');
const { randomEmail } = require('../../utils/dataGenerator');

let cartPage;
let subscriptionPage;
let email;
let productDetailPage;

// OPEN CART
When('the user Cart clicks', async ({ page }, option) => {
    cartPage = new CartPage(page);
    await cartPage.openCart();  
});

// FOOTER SCROLL
When('the user scrolls to the footer', async ({ page }) => {
  subscriptionPage = new SubscriptionPage(page);
  await subscriptionPage.scrollToFooter();
});

// SUBSCRIPTION SECTION VISIBLE
Then('the section cart SUBSCRIPTION {string} is visible', async ({ page }, sectionName) => {
  if (sectionName === "SUBSCRIPTION") {
    await subscriptionPage.verifySubscriptionSectionVisible();
  }
});


// SUCCESS MESSAGE
Then('the message SUSCRIPTION {string} is visible', async ({ page }, message) => {
  await subscriptionPage.verifySuccessMessage();
});

// ADD FIRST PRODUCT
When('adds the first product to the cart', async ({ page }) => {
  await productsPage.addFirstProductToCart();
});

// CONTINUE SHOPPING
When('clicks Continue Shopping "Continue Shopping"', async ({ page }) => {
  await productsPage.continueShopping();
});

// ADD SECOND PRODUCT
When('adds the second product to the cart', async ({ page }) => {
  await productsPage.addSecondProductToCart();
});

// GO TO CART
When('clicks View Cart', async ({ page }) => {
  await productsPage.goToCart();
  cartPage = new CartPage(page);
});

// VALIDATE PRODUCTS
Then('both products are visible in the cart with correct prices, quantities and totals', async ({ page }) => {
  await cartPage.verifyProductsVisible();
  await cartPage.verifyPricesQuantitiesTotals();
});

When('the user opens a product detail page', async ({ page }) => {
  productDetailPage = new ProductDetailPage(page);
  await productDetailPage.openProductByIndex(4); // igual que codegen
});

Then('the product detail is visible', async ({ page }) => {
  await productDetailPage.verifyProductDetailVisible();
});

When('the user sets quantity to {int}', async ({ page }, qty) => {
  await productDetailPage.setQuantity(qty);
});

When('clicks Add to cart', async ({ page }) => {
  await productDetailPage.addToCart();
});

Then('the product is displayed in the cart with quantity {int}', async ({ page }, qty) => {
  await cartPage.verifyQuantity(qty);
});