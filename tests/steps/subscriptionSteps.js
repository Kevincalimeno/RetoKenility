require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { randomEmail } = require('../../utils/dataGenerator');

let email;

When('the user scrolls to the footer1', async () => {
  await subscriptionPage.scrollToFooter();
});

Then('the {string} is visible', async ({}, sectionName) => {
  if (sectionName === "SUBSCRIPTION") {
    await subscriptionPage.verifySubscriptionSectionVisible();
  }
});

When('the user enters an email and submits subscription', async () => {
  email = randomEmail();
  await subscriptionPage.subscribe(email);
});

Then('the message sus "You have been successfully subscribed!" is visible', async () => {
  await subscriptionPage.verifySuccessMessage();
});

Then('the subscription message {string} is visible', async ({ page }, expectedMessage) => {
  await subscriptionPage.verifySuccessMessage(expectedMessage);
});