const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.getByRole('link', { name: ' Cart', exact: true });
    this.product1 = page.getByRole('link', { name: 'Blue Top' });
    this.product2 = page.getByRole('link', { name: 'Men Tshirt' });
    this.prices = page.getByText('Rs.');
    this.firstProductInCart = page.locator('#product-5');
  }

  async openCart() {
    await this.cartLink.click();
  }

   async verifyProductsVisible() {
    await expect(this.product1).toBeVisible();
    await expect(this.product2).toBeVisible();
  }

  async verifyPricesQuantitiesTotals() {
    await expect(this.prices.nth(0)).toBeVisible(); 
    await expect(this.prices.nth(1)).toBeVisible(); 
    await expect(this.prices.nth(2)).toBeVisible(); 
    await expect(this.prices.nth(3)).toBeVisible(); 
  }

   async verifyQuantity(expectedQty) {
    await expect(this.firstProductInCart).toContainText(String(expectedQty));
  }
}

module.exports = CartPage;
