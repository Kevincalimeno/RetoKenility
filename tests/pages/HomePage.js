const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = 'a[href="/login"]';    
    this.homeLogo = 'img[src="/static/images/home/logo.png"]';
  }

  get signupLoginButton() {
  return this.page.getByRole('link', { name: ' Signup / Login' });
}

async goToSignupLogin() {
  await this.signupLoginButton.click();
}


  async open(url) {
    await this.page.goto(url);
  }

  async isHomePageDisplayed() {
    await this.page.waitForSelector(this.homeLogo);
  }

  async navigateTo(link) {
    await this.page.click(this.signupLoginLink);
  }

  async scrollToFooter() {
  await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}

async clickScrollUp() {
  await this.page.locator('#scrollUp').click();
}

async verifyHomeTitleVisible() {
  await expect(this.page.locator('h2.title').first()).toBeVisible();
}



async scrollToTop() {
  await this.page.evaluate(() => window.scrollTo(0, 0));
}

async verifyHeaderVisible() {
  await expect(this.page.locator('header')).toBeVisible();
}
get productsButton() {
  return this.page.getByRole('link', { name: ' Products' });
}

async clickProducts() {
  await this.productsButton.click();
}

}

module.exports = HomePage;
