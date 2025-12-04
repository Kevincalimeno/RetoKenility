require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

Given('the user scrolls to the bottom of the page', async () => {
  await homePage.scrollToFooter();
});

When('the user clicks the scroll-up arrow', async () => {
  await homePage.clickScrollUp();
});

Then('the page title should be visible at the top', async () => {
  await homePage.verifyHomeTitleVisible();
});

When('the user scrolls manually to the top', async () => {
  await homePage.scrollToTop();
});

Then('the page header should be visible again', async () => {
  await homePage.verifyHeaderVisible();
});