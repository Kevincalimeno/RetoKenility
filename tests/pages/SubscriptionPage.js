const { expect } = require('@playwright/test');

class SubscriptionPage {
  constructor(page) {
    this.page = page;

    this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
    this.emailInput = page.getByRole('textbox', { name: 'Your email address' });
    this.subscribeButton = page.locator('#subscribe');
    this.successMessage = page.getByText('You have been successfully subscribed!');
  }

  async scrollToFooter() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }


  async verifySubscriptionSectionVisible() {
    await expect(this.subscriptionHeading).toBeVisible();
  }

  async subscribe(email) {
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }

  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible();
  }
}

module.exports = SubscriptionPage;
