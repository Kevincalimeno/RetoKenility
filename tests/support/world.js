const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
  constructor({ attach, browser }) {
    this.attach = attach;
    this.browser = global.browser; 
  }
}

setWorldConstructor(CustomWorld);
