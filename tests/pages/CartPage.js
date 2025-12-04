const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;

    // Cart en el menú
    this.cartLink = page.getByRole('link', { name: ' Cart', exact: true });

    // Productos dentro del carrito
    this.product1 = page.getByRole('link', { name: 'Blue Top' });
    this.product2 = page.getByRole('link', { name: 'Men Tshirt' });

    // Precios Rs.
    this.prices = page.getByText('Rs.');

    // Producto específico en la tabla
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
