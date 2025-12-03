const { expect } = require('@playwright/test');

class ContactPage {
  constructor(page) {
    this.page = page;

    this.contactTitle = 'h2:has-text("Get In Touch")';

    this.nameInput = 'input[name="name"]';
    this.emailInput = 'input[name="email"]';
    this.subjectInput = 'input[name="subject"]';
    this.messageTextarea = 'textarea[name="message"]';
    this.uploadInput = 'input[type="file"]';
    this.submitBtn = 'input[type="submit"][value="Submit"]';

    this.successMessage = '#contact-page';
  }

  async sectionVisible(section) {
    await this.page.waitForSelector(`h2:has-text("${section}")`);
  }

  async fillForm(name, email, subject, message) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.subjectInput, subject);
    await this.page.fill(this.messageTextarea, message);
  }

  async uploadFile(filePath) {
    await this.page.setInputFiles(this.uploadInput, filePath);
  }

  async submitFormWithDialog() {
    await this.page.waitForTimeout(1000);
    this.page.once("dialog", async (dialog) => {
      console.log("🔔 Dialog abierto:", dialog.message());
      await dialog.accept();
    });

    await this.page.click(this.submitBtn);
  }

  async checkSuccessMessage() {
    console.log("🔍 Validando mensaje de éxito...");

    // Verifica que el texto que inicia con "Success!" esté visible
    await expect(
      this.page.locator(this.successMessage).getByText('Success! Your details have')
    ).toBeVisible();

    // Verifica el texto completo
    await expect(
      this.page.locator(this.successMessage)
    ).toContainText(
      "Success! Your details have been submitted successfully."
    );
  }
}

module.exports = ContactPage;
