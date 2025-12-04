const { createBdd } = require('playwright-bdd');
const { Before } = createBdd();

const ProductsPage = require('../pages/ProductsPage');
const SubscriptionPage = require('../pages/SubscriptionPage');
const CartPage = require('../pages/CartPage');

Before(async ({ page }) => {
    global.productsPage = new ProductsPage(page);
    global.subscriptionPage = new SubscriptionPage(page);
    global.cartPage = new CartPage(page);
});
