const { expect } = require('@playwright/test');

class OrderConfirmPage {
  constructor(page) {
    this.page = page;
    this.orderPlacedText = 'text=Order Placed!';
    this.congratsText = 'text=Congratulations! Your order has been confirmed!';
    this.invoiceBtn = 'a:has-text("Download Invoice")';
  }

  // Validación del mensaje final del pedido
  async verifySuccessMessage() {
    await expect(this.page.locator(this.orderPlacedText)).toBeVisible({ timeout: 10000 });
    await expect(this.page.locator(this.congratsText)).toBeVisible({ timeout: 10000 });
  }

  async clickDownloadInvoice() {
    await this.page.locator(this.invoiceBtn).click();
  }

  // Acá se usa la espera del evento 'download', facil olvidarlo
  async verifyInvoiceDownloaded() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.locator(this.invoiceBtn).click(),
    ]);

    const filePath = await download.path();
    expect(filePath).not.toBeNull();
  }
}

module.exports = OrderConfirmPage;