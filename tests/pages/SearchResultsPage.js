const { expect } = require('@playwright/test');

class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.resultsTitle = page.getByRole('heading', { name: 'Searched Products' });
    this.searchResults = page.locator('.productinfo p'); 
  }

  async verifySearchResultsTitle() {
    await expect(this.resultsTitle).toBeVisible();
  }

  // Revisa que cada resultado incluya el texto buscado
  async verifyResultsContain(keyword) {
    const count = await this.searchResults.count();

    for (let i = 0; i < count; i++) {
      const text = (await this.searchResults.nth(i).textContent()).toLowerCase();
      expect(text).toContain(keyword.toLowerCase());
    }
  }
}

module.exports = SearchResultsPage;
