class LoginPage {
  constructor(page) {
    this.page = page;

    // Sections
    this.loginSectionTitle = 'h2:has-text("Login to your account")';
    this.signupSectionTitle = 'h2:has-text("New User Signup!")';

    // Inputs
    this.loginEmail = 'input[data-qa="login-email"]';
    this.loginPassword = 'input[data-qa="login-password"]';
    this.loginButton = 'button[data-qa="login-button"]';

    this.signupName = 'input[data-qa="signup-name"]';
    this.signupEmail = 'input[data-qa="signup-email"]';
    this.signupButton = 'button[data-qa="signup-button"]';
  }

  async sectionIsVisible(section) {
    await this.page.waitForSelector(`h2:has-text("${section}")`);
  }

  async enterValidCredentials(email, password) {
    await this.page.fill(this.loginEmail, email);
    await this.page.fill(this.loginPassword, password);
  }

  async enterInvalidCredentials() {
    await this.page.fill(this.loginEmail, "wrong@mail.com");
    await this.page.fill(this.loginPassword, "invalid123");
  }

  async clickLogin() {
    await this.page.click(this.loginButton);
  }

  async enterNewUser(name, email) {
    await this.page.fill(this.signupName, name);
    await this.page.fill(this.signupEmail, email);
  }

  async clickSignup() {
    await this.page.click(this.signupButton);
  }

  async errorIsVisible(msg) {
  await this.page.waitForSelector(`p:has-text("${msg}")`);
}
}

module.exports = LoginPage;
