const { createBdd } = require('playwright-bdd');
const { When, Then } = createBdd();
const ContactPage = require('../pages/ContactPage');
const path = require('path');
const { 
  randomEmail, 
  randomName, 
  randomSubject, 
  randomMessage 
} = require('../../utils/dataGenerator');

let contact;

When('the user navigates to contact "Contact us"', async ({ page }) => {
  contact = new ContactPage(page);
  await page.getByRole('link', { name: ' Contact us' }).click();
});

Then('the contact section {string} is visible', async ({ page }, section) => {
  await contact.sectionVisible(section);
});

When('the user fills the contact form with valid data', async ({ page }) => {
  const name = randomName();
  const email = randomEmail();
  const subject = randomSubject();
  const message = randomMessage();

  console.log("📝 Contact form data:", { name, email, subject, message });

  await contact.fillForm(name, email, subject, message);
});

When('the user uploads a file {string}', async ({ page }, filename) => {
  const filePath = path.join(__dirname, '../resources', filename);
  console.log("📁 Subiendo archivo desde:", filePath);
  await contact.uploadFile(filePath);
});

When('the user submits the contact form', async ({ page }) => {
  await contact.submitFormWithDialog();
});

Then('the contact success message is visible', async ({ page }) => {
  await contact.checkSuccessMessage();
});

When('the user returns to home', async ({ page }) => {
  await page.getByRole('link', { name: ' Home' }).click();
});

