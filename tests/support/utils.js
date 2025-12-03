const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const urls = 'https://qastaging.siigo.mx';

let browser, page;

async function performActionOnElement(selectors, action, ...args) {
  for (const selector of selectors) {
    const element = page.locator(selector);
    if (await element.isVisible()) {
      await element[action](...args);
      return;
    }
  }
  throw new Error(`No valid selector found to perform ${action}.`);
}

module.exports = {
  async initBrowser(headless = true) {
    browser = await chromium.launch({ headless });
    page = await browser.newPage();
    return page;
  },

  async closeBrowser() {
    if (page) await page.close();
    if (browser) await browser.close();
  },

  async urlDefine(env, country) {
    const url = urls[env]?.[country];
    if (!url) throw new Error(`Invalid environment (${env}) or country (${country})`);
    return url;
  },

  async fillField(selectors, value) {
    await performActionOnElement(selectors, 'fill', value);
  },

  async clickOn(selectors) {
    await performActionOnElement(selectors, 'click');
  }
};
