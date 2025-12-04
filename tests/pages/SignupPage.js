const { expect } = require('@playwright/test');

class SignupPage {
  constructor(page) {
    this.page = page;

    this.accountInfoTitle = 'h2:has-text("Enter Account Information")';

    // Account info
    this.genderMr = '#id_gender1';
    this.password = '#password';
    this.days = '#days';
    this.months = '#months';
    this.years = '#years';

    // Newsletters
    this.newsletter = '#newsletter';
    this.optin = '#optin';

    // Personal details
    this.firstName = '#first_name';
    this.lastName = '#last_name';
    this.company = '#company';
    this.address1 = '#address1';
    this.address2 = '#address2';
    this.country = '#country';
    this.state = '#state';
    this.city = '#city';
    this.zipcode = '#zipcode';
    this.mobile = '#mobile_number';

    this.createAccountBtn = 'button[data-qa="create-account"]';
    this.continueBtn = 'a[data-qa="continue-button"]';
    this.accountCreatedMsg = 'h2[data-qa="account-created"]';
  }

  async sectionVisible(section) {
    await this.page.waitForSelector(`h2:has-text("${section}")`);
  }

  async fillAccountInformation(password) {
    await this.page.click(this.genderMr);
    await this.page.fill(this.password, password);
    await this.page.selectOption(this.days, "10");
    await this.page.selectOption(this.months, "5");
    await this.page.selectOption(this.years, "1995");
  }

  async selectNewsletterAndOffers() {
    await this.page.check(this.newsletter);
    await this.page.check(this.optin);
  }

  async fillPersonalAndAddressDetails() {
    await this.page.fill(this.firstName, "Kevin");
    await this.page.fill(this.lastName, "Test");
    await this.page.fill(this.company, "MyCompany");
    await this.page.fill(this.address1, "Street 123");
    await this.page.fill(this.address2, "Apt 4");
    await this.page.selectOption(this.country, "Canada");
    await this.page.fill(this.state, "Ontario");
    await this.page.fill(this.city, "Toronto");
    await this.page.fill(this.zipcode, "12345");
    await this.page.fill(this.mobile, "3001234567");
  }

  async clickCreateAccount() {
    await this.page.click(this.createAccountBtn);
  }

  // -----------------------------------------------------
  //    🔹 MÉTODO PRINCIPAL PARA Order Management
  // -----------------------------------------------------
 async signupNewUser(email, name, password) {

  // Siempre esperar que aparezcan los campos correctos
  await this.page.waitForSelector('[data-qa="signup-name"]');

  // 🔹 Rellenar el formulario inicial REAL
  await this.page.fill('[data-qa="signup-name"]', name);
  await this.page.fill('[data-qa="signup-email"]', email);
  await this.page.click('button[data-qa="signup-button"]');

  // 🔹 Pantalla Enter Account Information
  await this.page.waitForSelector(this.accountInfoTitle);

  await this.fillAccountInformation(password);
  await this.selectNewsletterAndOffers();
  await this.fillPersonalAndAddressDetails();

  // 🔹 Crear cuenta
  await this.page.click(this.createAccountBtn);
}

  async verifyAccountCreated() {
    await expect(this.page.locator(this.accountCreatedMsg)).toBeVisible();
  }

  // -----------------------------------------------------
  //    🔹 CONTINUAR DESPUÉS DE CREAR LA CUENTA
  // -----------------------------------------------------
  async clickContinue() {
    await this.page.click(this.continueBtn);
  }


  
}

module.exports = SignupPage;
