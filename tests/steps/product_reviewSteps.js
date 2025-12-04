require('../hooks/hooks.js');
const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

When('the user fills the review form with valid information', async () => {
  await productDetailPage.fillReviewForm("Kevin", testEmail, "TEST REVIEW COMMENT!");
});

When('submits the review', async () => {
  await productDetailPage.submitReview();
});

Then('the success message should be displayed', async () => {
  await productDetailPage.verifyReviewSuccess();
});