const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const { randomEmail } = require('../../utils/dataGenerator');

let email;

// SCROLL
When('the user scrolls to the footer1', async () => {
  await subscriptionPage.scrollToFooter();
});

// SUBSCRIPTION SECTION HOME
Then('the {string} is visible', async ({}, sectionName) => {
  if (sectionName === "SUBSCRIPTION") {
    await subscriptionPage.verifySubscriptionSectionVisible();
  }
});

// ENTER EMAIL + SUBMIT
When('the user enters an email and submits subscription', async () => {
  email = randomEmail();
  await subscriptionPage.subscribe(email);
});

// SUCCESS MESSAGE HOME
Then('the message sus "You have been successfully subscribed!" is visible', async () => {
  await subscriptionPage.verifySuccessMessage();
});

Then('the subscription message {string} is visible', async ({ page }, expectedMessage) => {
  await subscriptionPage.verifySuccessMessage(expectedMessage);
});
