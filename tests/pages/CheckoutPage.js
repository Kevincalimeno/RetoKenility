const { expect } = require('@playwright/test');

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.placeOrderBtn = 'a.check_out';
  }

  // Entrega
  async verifyDeliveryAddress() {
    const address = this.page.locator('#address_delivery');

    await expect(address).toBeVisible();
    await expect(address).toContainText("Kevin");
    await expect(address).toContainText("Test");
    await expect(address).toContainText("Street 123");
    await expect(address).toContainText("Apt 4");
    await expect(address).toContainText("Toronto");
    await expect(address).toContainText("Ontario");
    await expect(address).toContainText("12345");
    await expect(address).toContainText("Canada");
    await expect(address).toContainText("3001234567");
  }

  // Facturación 
  async verifyBillingAddress() {
    const address = this.page.locator('#address_invoice');

    await expect(address).toBeVisible();
    await expect(address).toContainText("Kevin");
    await expect(address).toContainText("Test");
    await expect(address).toContainText("Street 123");
    await expect(address).toContainText("Apt 4");
    await expect(address).toContainText("Toronto");
    await expect(address).toContainText("Ontario");
    await expect(address).toContainText("12345");
    await expect(address).toContainText("Canada");
    await expect(address).toContainText("3001234567");
  }

  async clickPlaceOrder() {
    const btn = this.page.locator(this.placeOrderBtn);
    await expect(btn).toBeVisible();
    await btn.click();
  }
}

module.exports = CheckoutPage;