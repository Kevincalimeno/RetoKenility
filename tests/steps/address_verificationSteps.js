require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

When('the user navigates to checkout', async () => {
  await cartPage.clickProceedToCheckout();
});

Then('the delivery address should match the registered data', async () => {
  await checkoutPage.verifyDeliveryAddress(testEmail);
});

Then('the billing address should match the registered data', async () => {
  await checkoutPage.verifyBillingAddress(testEmail);
});