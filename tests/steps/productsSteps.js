require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { expect } = require('@playwright/test');
const ProductsPage = require('../pages/ProductsPage');
const ProductDetailsPage = require('../pages/ProductDetailsPage');
const SearchResultsPage = require('../pages/SearchResultsPage');

let productsPage;
let productDetailsPage;
let searchKeyword;
let resultsPage;

When('the user clicks Products {string}', async ({ page }, option) => {
  if (option === "Products") {
    productsPage = new ProductsPage(page);
    await productsPage.openProductsPage();
  }
});

Then('the user is navigated to the {string} page', async ({ page }, section) => {
  if (section === "ALL PRODUCTS") {
    await productsPage.verifyAllProductsPageVisible();
  }
});

Then('the products list is visible', async ({ page }) => {
  await productsPage.verifyProductsListVisible();
});

When('the user clicks "View Product" for the first product', async ({ page }) => {
  await productsPage.openFirstProduct();
  productDetailsPage = new ProductDetailsPage(page);
});

Then('the user is navigated to the product detail page', async ({ page }) => {
  await productDetailsPage.verifyProductDetailPageVisible();
});

Then('the product details are visible: name, category, price, availability, condition, brand', async ({ page }) => {
  await productDetailsPage.verifyProductDetailsVisible();
});

When('the user searches for a product by name', async ({ page }) => {
  productsPage = new ProductsPage(page);
  searchKeyword = "men Tshirt";
  await productsPage.searchProduct(searchKeyword);
  resultsPage = new SearchResultsPage(page);
});

Then('the section SEARCHED PRODUCTS {string} is visible', async ({ page }, sectionName) => {
  if (sectionName === "SEARCHED PRODUCTS") {
    await resultsPage.verifySearchResultsTitle();
  }
});

Then('all related products are displayed', async ({ page }) => {
  await resultsPage.verifyResultsContain(searchKeyword);
});