const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;

    // Menú superior
    this.productsMenu = page.getByRole('link', { name: /Products/i });

    // Encabezado
    this.allProductsHeading = page.getByRole('heading', { name: /All Products/i });

    // Vista de productos
    this.products = page.locator('.product-image-wrapper');
    this.viewProductButtons = page.getByRole('link', { name: /View Product/i });

    // Buscador
    this.searchInput = page.getByRole('textbox', { name: /Search Product/i });
    this.searchButton = page.locator('#submit_search');

    // Add to cart (estos aparecen después de hover)
    this.addToCartButtons = page.locator('.add-to-cart');

    // Botón del modal
    this.continueShoppingBtn = page.getByRole('button', { name: /Continue Shopping/i });

    // Link del carrito
    this.cartMenu = page.getByRole('link', { name: /Cart/i });

    this.hereLink = page.getByRole('link', { name: 'Here' });
  }

  // 🟦 Abrir página de productos
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
    await this.searchInput.click();
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async openFirstProduct() {
    await this.viewProductButtons.first().click();
  }

   async verifyProductsListVisible() {
    await expect(this.viewProductButtons.first()).toBeVisible();
  }

async addFirstProductToCart() {
  const firstProduct = this.products.nth(0);

  console.log("🟦 Hover sobre producto 1...");
  await firstProduct.hover();

  console.log("🟩 Click en Add to cart (overlay)...");
  await firstProduct.locator('.product-overlay .add-to-cart').first().click();

  console.log("🟨 Cerrando modal...");
  await expect(this.continueShoppingBtn).toBeVisible();
  await this.continueShoppingBtn.click();
}

async addSecondProductToCart() {
  const secondProduct = this.products.nth(1);

  console.log("🟦 Hover sobre producto 2...");
  await secondProduct.hover();

  console.log("🟩 Click en Add to cart (overlay)...");
  await secondProduct.locator('.product-overlay .add-to-cart').first().click();

  console.log("🟨 Cerrando modal...");
  await expect(this.continueShoppingBtn).toBeVisible();
  await this.continueShoppingBtn.click();
}


  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  // 🚀 View Cart
async goToCart() {
  console.log("🚀 Ir al Cart desde el menú...");
  await this.cartMenu.click();
}
}
module.exports = ProductsPage;
