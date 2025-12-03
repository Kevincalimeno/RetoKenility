const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');
const AccountPage = require('../pages/AccountPage');

let home, login, signup, account;

Given('the user opens the application at {string}', async function (url) {
  home = new HomePage(this.page);
  login = new LoginPage(this.page);
  signup = new SignupPage(this.page);
  account = new AccountPage(this.page);

  await home.open(url);
});

Given('the home page is displayed successfully', async function () {
  await home.isHomePageDisplayed();
});

When('the user navigates to {string}', async function () {
  await home.navigateTo();
});

When('the section {string} is visible', async function (section) {
  await login.sectionIsVisible(section);
});

When('the user enters a new name and email', async function () {
  const randomEmail = `test${Date.now()}@mail.com`;
  await login.enterNewUser("KevinTest", randomEmail);
});

When('clicks {string}', async function (button) {
  if (button === "Signup") await login.clickSignup();
  if (button === "Login") await login.clickLogin();
  if (button === "Create Account") await signup.clickCreateAccount();
});

Then('the section {string} is visible', async function (section) {
  await signup.sectionVisible(section.toUpperCase());
});

When('the user completes the account information form', async function () {
  await signup.fillAccountInformation();
});

When('selects the newsletter and special offers options', async function () {
  await signup.selectNewsletterAndOffers();
});

When('fills the personal and address details', async function () {
  await signup.fillPersonalAndAddressDetails();
});

Then('the message {string} is visible', async function (msg) {
  await account.messageIsVisible(msg);
});

When('the user clicks {string}', async function (action) {
  if (action === "Continue") await account.clickContinue();
  if (action === "Delete Account") await account.clickDeleteAccount();
  if (action === "Logout") await account.clickLogout();
});

When('the user enters valid credentials', async function () {
  await login.enterValidCredentials("testauto@mail.com", "Password123");
});

When('the user enters invalid credentials', async function () {
  await login.enterInvalidCredentials();
});

Then('the error {string} is visible', async function () {
  await login.errorIsVisible();
});

Then('the login page is displayed', async function () {
  await login.sectionIsVisible("Login to your account");
});
