const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.getByRole('link', { name: ' Cart', exact: true });
    this.product1 = page.getByRole('link', { name: 'Blue Top' });
    this.product2 = page.getByRole('link', { name: 'Men Tshirt' });
    this.prices = page.getByText('Rs.');
    this.firstProductInCart = page.locator('#product-5');
    this.proceedToCheckoutBtn = page.locator('a.check_out');
    this.registerLoginBtn = page.getByRole('link', { name: 'Register / Login' });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyItemAdded() {
    await expect(this.page.locator('#cart_info')).toBeVisible();
  }

  async verifyProductsVisible() {
    await expect(this.product1).toBeVisible();
    await expect(this.product2).toBeVisible();
  }

  async verifyProductInCart(productName) {
    await expect(this.page.locator('#cart_info')).toContainText(productName);
  }

  async verifyPricesQuantitiesTotals() {
    await expect(this.prices.nth(0)).toBeVisible();
    await expect(this.prices.nth(1)).toBeVisible();
    await expect(this.prices.nth(2)).toBeVisible();
    await expect(this.prices.nth(3)).toBeVisible();
  }

  // unidades
  async verifyQuantity(expectedQty) {
    await expect(this.firstProductInCart).toContainText(String(expectedQty));
  }

  async clickProceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }

  async clickRegisterLogin() {
    await this.registerLoginBtn.click();
  }

  async removeFirstProduct() {
    await this.page.click('a.cart_quantity_delete'); 
    await this.page.waitForTimeout(1000); 
  }

  // carrito vacío
  async verifyCartIsEmpty() {
    await expect(this.page.locator('#empty_cart')).toBeVisible({ timeout: 7000 });
  }

  async clickSignupLogin() {
    await this.page.getByRole('link', { name: /Signup \/ Login/i }).click();
  }
}

module.exports = CartPage;