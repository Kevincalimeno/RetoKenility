require('../hooks/hooks.js');

const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();

// --------------------------------------------------
// TEST 14 – Register While Checkout
// --------------------------------------------------

Given('the user adds a product to the cart', async () => {
  await homePage.clickProducts();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();
});

When('the user proceeds to checkout', async () => {
  await cartPage.clickProceedToCheckout();
});

When('the user selects to register during checkout', async () => {
  await cartPage.clickRegisterLogin();
});

When('the user completes the signup form', async () => {
  await signupPage.signupNewUser(testEmail, 'Kevin QA', testPassword);
});

Then('the account should be created successfully', async () => {
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
  await homePage.page.getByRole('link', { name: ' Cart' }).click();
});

When('the user continues to checkout', async () => {
  await cartPage.clickProceedToCheckout();
});

When('the user enters valid payment information', async () => {
  await checkoutPage.clickPlaceOrder();
  await paymentPage.fillPaymentForm('Kevin', '123456789012', '123', '12', '2030');
});

Then('the order should be placed successfully', async () => {
  await paymentPage.submitPayment();
  await orderConfirmPage.verifySuccessMessage();
});

// --------------------------------------------------
// TEST 15 – Register BEFORE Checkout
// --------------------------------------------------

Given('the user registers a new account', async () => {
  await homePage.goToSignupLogin();
  await signupPage.signupNewUser(testEmail, 'Kevin QA', testPassword);
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();
});

Then('the order confirmation should be visible', async () => {
  await paymentPage.submitPayment();
  await orderConfirmPage.verifySuccessMessage();
});

// --------------------------------------------------
// TEST 16 – Login BEFORE checkout
// --------------------------------------------------
Given('the user logs in with an existing account', async () => {
  // Usamos el correo dinámico generado en el hook
  const email = testEmail;
  const password = testPassword;

  // Ir a Signup/Login
  await homePage.goToSignupLogin();

  // Registramos nuevo usuario (que será el "existing account" de este test)
  await signupPage.signupNewUser(email, 'Kevin QA', password);
  await signupPage.verifyAccountCreated();
  await signupPage.clickContinue();

  // Verificamos que quedó logueado
  await loginPage.verifyLoggedIn();
});

// --------------------------------------------------
// TEST 24 – Download Invoice
// --------------------------------------------------

Given('the user completes a purchase with valid payment details', async () => {
  await checkoutPage.clickPlaceOrder();
  await paymentPage.fillPaymentForm('Kevin', '111111111111', '111', '11', '2030');
  await paymentPage.submitPayment();
});

When('the user clicks the Download Invoice button', async () => {
  await orderConfirmPage.clickDownloadInvoice();
});

Then('the invoice file should download successfully', async () => {
  await orderConfirmPage.verifyInvoiceDownloaded();
});


When('proceeds to checkout', async () => {
  await cartPage.clickProceedToCheckout();
});

When('enters valid payment information', async () => {
  await checkoutPage.clickPlaceOrder();
  await paymentPage.fillPaymentForm('Kevin', '123456789012', '123', '12', '2030');
});

Then('the purchase should be completed', async () => {
  await paymentPage.submitPayment();
  await orderConfirmPage.verifySuccessMessage();
});
