require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();

When('the user selects a category from the sidebar', async ({ page }) => {
  await productsPage.scrollToCategories();
  await productsPage.clickCategory('Women');
});

When('the user selects a subcategory', async ({ page }) => {
  await productsPage.clickSubCategory('Tops');
});

Then('products from that subcategory should be displayed', async () => {
  await productsPage.verifySubCategoryLoaded('Tops');
});