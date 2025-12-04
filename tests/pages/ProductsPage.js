const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsMenu = page.getByRole('link', { name: /Products/i });
    this.allProductsHeading = page.getByRole('heading', { name: /All Products/i });
    this.products = page.locator('.product-image-wrapper');
    this.viewProductButtons = page.getByRole('link', { name: /View Product/i });
    this.searchInput = page.getByRole('textbox', { name: /Search Product/i });
    this.searchButton = page.locator('#submit_search');
    this.addToCartButtons = page.locator('.add-to-cart');
    this.continueShoppingBtn = page.getByRole('button', { name: /Continue Shopping/i });
    this.cartMenu = page.getByRole('link', { name: /Cart/i });
    this.hereLink = page.getByRole('link', { name: 'Here' });
  }

  async openProductsPage() {
    await this.productsMenu.click();
    await expect(this.allProductsHeading).toBeVisible();
    await expect(this.products.first()).toBeVisible();
  }

  async clickHere() {
    await this.hereLink.click();
    await expect(this.allProductsHeading).toBeVisible();
    await expect(this.products.first()).toBeVisible();
  }

  async verifyAllProductsPageVisible() {
    await expect(this.allProductsHeading).toBeVisible();
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
    await this.products.first().waitFor({ state: 'visible' });
  }

  async clickCategory(category) {
    await this.page.locator(`a[href="#${category}"]`).click();
  }

  async scrollToRecommended() {
    await this.page.evaluate(() => window.scrollBy(0, document.body.scrollHeight));
    await this.page.locator('#recommended-item-carousel').waitFor();
  }

  async verifySubCategoryLoaded(sub) {
    const header = this.page.locator('div.features_items h2.title');
    await expect(header).toContainText(sub, { timeout: 7000 });
  }

  async addRecommendedProduct() {
    await this.page.locator('#recommended-item-carousel .product-image-wrapper').nth(0).hover();
    await this.page.locator('#recommended-item-carousel .add-to-cart').first().click();
  }

  async verifyCategoryLoaded(category) {
    const header = this.page.locator('div.features_items h2.title');
    await expect(header).toContainText(category);
  }

  async clickSubCategory(sub) {
    const subItem = this.page
      .locator(`div.panel-body ul li a:has-text("${sub}")`)
      .first();

    await subItem.scrollIntoViewIfNeeded();
    await subItem.click({ force: true });
  }

  async selectBrand(brandName) {
    await this.page.locator(`a:has-text("${brandName}")`).click();
  }

  async verifyProductsBrand(brandName) {
    await expect(this.page).toHaveURL(new RegExp(`brand_products/${brandName}`, "i"));
    const header = this.page.locator('h2.title');
    await expect(header).toContainText(`Brand - ${brandName} Products`);
  }

  async scrollToCategories() {
    await this.page.locator('.left-sidebar').scrollIntoViewIfNeeded();
  }

  async openFirstProduct() {
    await this.viewProductButtons.first().click();
  }

  async verifyProductsListVisible() {
    await expect(this.viewProductButtons.first()).toBeVisible();
  }

  // Hover + click overlay
  async addFirstProductToCart() {
    const firstProduct = this.products.nth(0);

    await firstProduct.hover();
    await firstProduct.locator('.product-overlay .add-to-cart').first().click();

    await expect(this.continueShoppingBtn).toBeVisible();
    await this.continueShoppingBtn.click();
  }

  async addSecondProductToCart() {
    const secondProduct = this.products.nth(1);

    await secondProduct.hover();
    await secondProduct.locator('.product-overlay .add-to-cart').first().click();

    await expect(this.continueShoppingBtn).toBeVisible();
    await this.continueShoppingBtn.click();
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  async goToCart() {
    const menuCart = this.page.locator('div.shop-menu a[href="/view_cart"]');
    await menuCart.scrollIntoViewIfNeeded();
    await menuCart.click({ force: true });
    await expect(this.page).toHaveURL(/view_cart/);
  }

  async getFirstProductName() {
    return (await this.page.locator('.productinfo p').first().textContent()).trim();
  }

  async addFirstSearchResultToCart() {
    const firstProduct = this.products.first();

    await firstProduct.hover();
    await firstProduct.locator('.product-overlay .add-to-cart').first().click();

    await expect(this.continueShoppingBtn).toBeVisible();
    await this.continueShoppingBtn.click();
  }
}

module.exports = ProductsPage;