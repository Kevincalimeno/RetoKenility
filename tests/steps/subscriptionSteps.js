const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const SubscriptionPage = require('../pages/SubscriptionPage');
const { randomEmail } = require('../../utils/dataGenerator');

let subscriptionPage;
let email;


When('the user scrolls to the footer1', async ({ page }) => {
  subscriptionPage = new SubscriptionPage(page);
  await subscriptionPage.scrollToFooter();
});

Then('the {string} is visible', async ({ page }, sectionName) => {
  if (sectionName === "SUBSCRIPTION") {
    await subscriptionPage.verifySubscriptionSectionVisible();
  }
});

When('the user enters an email and submits subscription', async ({ page }) => {
  email = randomEmail();
  await subscriptionPage.subscribe(email);
});