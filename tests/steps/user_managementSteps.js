const { createBdd } = require('playwright-bdd');
const { Given, When, Then } = createBdd();
const { randomEmail, randomPassword, randomName } = require('../../utils/dataGenerator');
const HomePage = require('../pages/HomePage');
const LoginPage = require('../pages/LoginPage');
const SignupPage = require('../pages/SignupPage');
const AccountPage = require('../pages/AccountPage');

let userCache = { generatedUser: null };

let home, login, signup, account;

Given('the user opens the application at {string}', async ({ page }, url) => {
  home = new HomePage(page);
  login = new LoginPage(page);
  signup = new SignupPage(page);
  account = new AccountPage(page);
  await home.open(url);
});

Given('the home page is displayed successfully', async () => {
  await home.isHomePageDisplayed();
});

When('the user navigates to {string}', async ({}, nav) => {
  await home.navigateTo(nav);
});

When('the login section {string} is visible', async ({}, section) => {
  await login.sectionIsVisible(section);
});

When('the signup section {string} is visible', async ({}, section) => {
  await signup.sectionVisible(section.toUpperCase());
});

When('the user enters a new name and email', async () => {
  const name = randomName();
  const email = randomEmail();
  userCache.generatedUser = { name, email };
  console.log("Usuario generado:", userCache.generatedUser);
  await login.enterNewUser(name, email);
});

When('clicks {string}', async ({}, button) => {
  if (button === "Signup") await login.clickSignup();
  if (button === "Login") await login.clickLogin();
  if (button === "Create Account") await signup.clickCreateAccount();
});

When('the user completes the account information form', async () => {
  const password = randomPassword();
  userCache.generatedUser.password = password;
  console.log("Password generado:", password);
  await signup.fillAccountInformation(password);
});

When('selects the newsletter and special offers options', async () => {
  await signup.selectNewsletterAndOffers();
});

When('fills the personal and address details', async () => {
  await signup.fillPersonalAndAddressDetails();
});

When('the user clicks {string}', async ({}, action) => {
  if (action === "Continue") await account.clickContinue();
  if (action === "Delete Account") await account.clickDeleteAccount();
  if (action === "Logout") await account.clickLogout();
});

When('the user enters an existing name and email', async ({ page }) => {
  const name = "KevinExisting";
  const email = "test@mail.com";

  await login.enterNewUser(name, email);
});

When('the user enters valid credentials', async () => {
  await login.enterValidCredentials(
    userCache.generatedUser.email,
    userCache.generatedUser.password
  );
});

When('the user enters invalid credentials', async () => {
  await login.enterInvalidCredentials();
});

Then('the message {string} is visible', async ({}, msg) => {
  if (msg.includes("username")) {
    msg = msg.replace("username", userCache.generatedUser.name);
  }
  console.log("Validando mensaje:", msg);
  await account.messageIsVisible(msg);
});

Then('the error {string} is visible', async ({ page }, msg) => {
  await login.errorIsVisible(msg);
});

Then('the login page is displayed', async () => {
  await login.sectionIsVisible("Login to your account");
});

Then('the login account section {string} is visible', async ({}, section) => {
  await login.sectionIsVisible(section);
});
