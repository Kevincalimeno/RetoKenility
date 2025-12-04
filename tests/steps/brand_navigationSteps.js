require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();

When('the user selects a brand from the brand list', async () => {
  await productsPage.selectBrand('Polo');
});

Then('only the products of that brand should be displayed', async () => {
  await productsPage.verifyProductsBrand('Polo');
});

When('the user goes to the cart', async () => {
  await productsPage.goToCart();
});

When('the user adds a brand product to the cart', async () => {
  await productsPage.addFirstProductToCart();
});

Then('the cart should contain that brand product', async () => {
  await cartPage.verifyProductInCart('Blue Top');
});