const { expect } = require('@playwright/test');

class TestCasesPage {
  constructor(page) {
    this.page = page;
    this.caseTitle = 'b';
  }

  async openTestCase(name) {
    await this.page.getByRole('link', { name }).click();
  }

  async verifyCaseVisible() {
    await expect(this.page.locator(this.caseTitle)).toBeVisible();
  }
}

module.exports = TestCasesPage;
