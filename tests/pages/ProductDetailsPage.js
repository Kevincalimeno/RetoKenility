const { expect } = require('@playwright/test');

class ProductDetailsPage {
  constructor(page) {
    this.page = page;

    this.productName = page.getByRole('heading', { name: 'Blue Top' });
    this.category = page.getByText('Category: Women > Tops');
    this.price = page.getByText('Rs.');
    this.availability = page.getByText('Availability: In Stock');
    this.condition = page.getByText('Condition: New');
    this.brand = page.getByText('Brand: Polo');
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.getByRole('button', { name: ' Add to cart' });
    this.viewCartButton = page.getByRole('link', { name: 'View Cart' });
    this.continueShoppingBtn = page.getByRole('button', { name: /Continue Shopping/i });
  }

  async verifyProductDetailPageVisible() {
    await expect(this.productName).toBeVisible();
  }

  async verifyProductDetailsVisible() {
    await expect(this.productName).toBeVisible();
    await expect(this.category).toBeVisible();
    await expect(this.price).toBeVisible();
    await expect(this.availability).toBeVisible();
    await expect(this.condition).toBeVisible();
    await expect(this.brand).toBeVisible();
  }

  async openProductByIndex(index = 4) {
    await this.page.getByRole('link', { name: ' View Product' }).nth(index).click();
  }

  async verifyProductDetailVisible() {
    await expect(this.category).toBeVisible();
  }

  async setQuantity(qty) {
    await this.quantityInput.fill(String(qty));
  }

  async addToCart() {
    await this.addToCartButton.click();
      
    await expect(this.continueShoppingBtn).toBeVisible();
    await this.continueShoppingBtn.click();
  }

  async goToCart() {
    await this.viewCartButton.click();
  }
}

module.exports = ProductDetailsPage;