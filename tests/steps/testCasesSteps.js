require('../hooks/hooks.js');

const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const TestCasesPage = require('../pages/TestCasesPage');

let testCases;

When('the user navigates to testcases {string}', async ({ page }, menuOption) => {
  testCases = new TestCasesPage(page);
  await page.getByRole('link', { name: menuOption, exact: true }).click();
});

When('the user opens test case {string}', async ({ page }, testCaseName) => {
  await testCases.openTestCase(testCaseName);
});

Then('the test case content is visible', async ({ page }) => {
  await testCases.verifyCaseVisible();
});
