class AccountPage {
  constructor(page) {
    this.page = page;

    this.accountCreatedMsg = 'h2:has-text("Account Created!")';
    this.accountDeletedMsg = 'h2:has-text("Account Deleted!")';
    this.loggedInText = 'a:has-text("Logged in as")';
    this.continueButton = 'a[data-qa="continue-button"]';
    this.deleteAccountButton = 'a[href="/delete_account"]';
    this.logoutButton = 'a[href="/logout"]';
  }

  async messageIsVisible(msg) {
    await this.page.waitForSelector(`h2:has-text("${msg}")`);
  }

  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  async clickDeleteAccount() {
    await this.page.click(this.deleteAccountButton);
  }

  async clickLogout() {
    await this.page.click(this.logoutButton);
  }
}

module.exports = AccountPage;
