require('../hooks/hooks.js');

const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

// When user goes to checkout from cart
When('the user navigates to checkout', async () => {
  await cartPage.clickProceedToCheckout();
});

// Delivery address must match registered info
Then('the delivery address should match the registered data', async () => {
  await checkoutPage.verifyDeliveryAddress(testEmail);
});

// Billing address must match registered info
Then('the billing address should match the registered data', async () => {
  await checkoutPage.verifyBillingAddress(testEmail);
});
