class HomePage {
  constructor(page) {
    this.page = page;
    this.signupLoginLink = 'a[href="/login"]';    
    this.homeLogo = 'img[src="/static/images/home/logo.png"]';
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
}

module.exports = HomePage;
