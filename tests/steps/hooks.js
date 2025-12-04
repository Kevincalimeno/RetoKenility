const { createBdd } = require('playwright-bdd');
const { Before } = createBdd();

// PAGE OBJECTS
const SubscriptionPage = require('../pages/SubscriptionPage');
const CartPage = require('../pages/CartPage');
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailPage = require('../pages/ProductDetailsPage');

// Habilitamos variables globales para TODOS los steps
global.subscriptionPage = undefined;
global.cartPage = undefined;
global.productsPage = undefined;
global.productDetailPage = undefined;

// Before: Se ejecuta ANTES de cada escenario
Before(async ({ page }) => {
  global.subscriptionPage = new SubscriptionPage(page);
  global.cartPage = new CartPage(page);
  global.productsPage = new ProductsPage(page);
  global.productDetailPage = new ProductDetailPage(page);
});
