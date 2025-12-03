const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.productsMenu = 'a[href="/products"]';
    this.allProductsHeading = this.page.getByRole('heading', { name: 'All Products' });
    this.viewProductButtons = this.page.getByRole('link', { name: ' View Product' });
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.locator('#submit_search');
    this.addToCartButtons = page.getByText('Add to cart');
    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async openProductsPage() {
    await this.page.getByRole('link', { name: ' Products', exact: true }).click();
  }

  async verifyAllProductsPageVisible() {
    await expect(this.allProductsHeading).toBeVisible();
  }

  async verifyProductsListVisible() {
    await expect(this.viewProductButtons.first()).toBeVisible();
  }

  async openFirstProduct() {
    await this.viewProductButtons.first().click();
  }

    async verifyAllProductsPageVisible() {
    await expect(this.allProductsHeading).toBeVisible();
  }

  async searchProduct(productName) {
    await this.searchInput.click();
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }
    async addFirstProductToCart() {
    await this.addToCartButtons.nth(1).click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  async addSecondProductToCart() {
    await this.addToCartButtons.nth(3).click();
  }

  async goToCart() {
    await this.viewCartLink.click();
  }
}

module.exports = ProductsPage;
