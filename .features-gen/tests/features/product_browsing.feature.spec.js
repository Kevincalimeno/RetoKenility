// Generated from: tests\features\product_browsing.feature
import { test } from "playwright-bdd";

test.describe('Product browsing and details on AutomationExercise', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user opens the application at "http://automationexercise.com"', null, { page }); 
    await And('the home page is displayed successfully'); 
    await And('the user clicks Products "Products"', null, { page }); 
  });
  
  test('View all products and product detail page', { tag: ['@regression', '@products', '@happy', '@test8'] }, async ({ When, Then, And, page }) => { 
    await Then('the user is navigated to the "ALL PRODUCTS" page', null, { page }); 
    await And('the products list is visible', null, { page }); 
    await When('the user clicks "View Product" for the first product', null, { page }); 
    await Then('the user is navigated to the product detail page', null, { page }); 
    await And('the product details are visible: name, category, price, availability, condition, brand', null, { page }); 
  });

  test('Search for a product', { tag: ['@regression', '@products', '@search', '@happy', '@test9'] }, async ({ When, Then, And, page }) => { 
    await Then('the user is navigated to the "ALL PRODUCTS" page', null, { page }); 
    await When('the user searches for a product by name', null, { page }); 
    await Then('the section SEARCHED PRODUCTS "SEARCHED PRODUCTS" is visible', null, { page }); 
    await And('all related products are displayed', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\product_browsing.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":12,"tags":["@regression","@products","@happy","@test8"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And the user clicks Products \"Products\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"Products\"","children":[{"start":26,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user is navigated to the \"ALL PRODUCTS\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"ALL PRODUCTS\"","children":[{"start":30,"value":"ALL PRODUCTS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the products list is visible","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When the user clicks \"View Product\" for the first product","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user is navigated to the product detail page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And the product details are visible: name, category, price, availability, condition, brand","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":21,"tags":["@regression","@products","@search","@happy","@test9"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And the user clicks Products \"Products\"","isBg":true,"stepMatchArguments":[{"group":{"start":25,"value":"\"Products\"","children":[{"start":26,"value":"Products","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the user is navigated to the \"ALL PRODUCTS\" page","stepMatchArguments":[{"group":{"start":29,"value":"\"ALL PRODUCTS\"","children":[{"start":30,"value":"ALL PRODUCTS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user searches for a product by name","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the section SEARCHED PRODUCTS \"SEARCHED PRODUCTS\" is visible","stepMatchArguments":[{"group":{"start":30,"value":"\"SEARCHED PRODUCTS\"","children":[{"start":31,"value":"SEARCHED PRODUCTS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"And all related products are displayed","stepMatchArguments":[]}]},
]; // bdd-data-end