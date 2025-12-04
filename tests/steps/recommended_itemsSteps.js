require('../hooks/hooks.js');

const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();

When('the user scrolls to the recommended items section', async () => {
  await productsPage.scrollToRecommended();
});

When('adds one recommended product to the cart', async () => {
  await productsPage.addRecommendedProduct();
});

Then('the product should appear in the cart', async () => {
  await cartPage.verifyItemAdded();
});
