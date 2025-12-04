// Generated from: tests\features\cart_management.feature
import { test } from "playwright-bdd";

test.describe('Cart management and subscription validation on AutomationExercise', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user opens the application at "http://automationexercise.com"', null, { page }); 
    await And('the home page is displayed successfully'); 
  });
  
  test('Verify subscription in home page', { tag: ['@regression', '@subscription', '@happy', '@test10'] }, async ({ When, Then, page }) => { 
    await When('the user scrolls to the footer1'); 
    await Then('the "SUBSCRIPTION" is visible'); 
    await When('the user enters an email and submits subscription'); 
    await Then('the subscription message "You have been successfully subscribed!" is visible', null, { page }); 
  });

  test('Verify subscription in cart page', { tag: ['@regression', '@subscription', '@happy', '@test11'] }, async ({ When, Then, And, page }) => { 
    await When('the user Cart clicks'); 
    await And('the user scrolls to the footer1'); 
    await Then('the section cart SUBSCRIPTION "SUBSCRIPTION" is visible'); 
    await When('the user enters an email and submits subscription'); 
    await Then('the subscription message "You have been successfully subscribed!" is visible', null, { page }); 
  });

  test('Add multiple products to the cart', { tag: ['@regression', '@cart', '@happy', '@test12'] }, async ({ When, Then, And }) => { 
    await When('the user Cart clicks'); 
    await And('adds the first product to the cart'); 
    await And('adds the second product to the cart'); 
    await And('clicks View Cart'); 
    await Then('both products are visible in the cart with correct prices, quantities and totals'); 
  });

  test('Verify product quantity in cart', { tag: ['@regression', '@cart', '@happy', '@test13'] }, async ({ When, Then, And }) => { 
    await When('the user Cart clicks'); 
    await When('the user opens a product detail page'); 
    await Then('the product detail is visible'); 
    await When('the user sets quantity to 4'); 
    await And('clicks Add to cart'); 
    await And('clicks View Cart quantity'); 
    await Then('the product is displayed in the cart with quantity 4'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart_management.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@regression","@subscription","@happy","@test10"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user scrolls to the footer1","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the \"SUBSCRIPTION\" is visible","stepMatchArguments":[{"group":{"start":4,"value":"\"SUBSCRIPTION\"","children":[{"start":5,"value":"SUBSCRIPTION","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user enters an email and submits subscription","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the subscription message \"You have been successfully subscribed!\" is visible","stepMatchArguments":[{"group":{"start":25,"value":"\"You have been successfully subscribed!\"","children":[{"start":26,"value":"You have been successfully subscribed!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@regression","@subscription","@happy","@test11"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user Cart clicks","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And the user scrolls to the footer1","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then the section cart SUBSCRIPTION \"SUBSCRIPTION\" is visible","stepMatchArguments":[{"group":{"start":30,"value":"\"SUBSCRIPTION\"","children":[{"start":31,"value":"SUBSCRIPTION","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user enters an email and submits subscription","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the subscription message \"You have been successfully subscribed!\" is visible","stepMatchArguments":[{"group":{"start":25,"value":"\"You have been successfully subscribed!\"","children":[{"start":26,"value":"You have been successfully subscribed!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":29,"tags":["@regression","@cart","@happy","@test12"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user Cart clicks","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And adds the first product to the cart","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And adds the second product to the cart","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"And clicks View Cart","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then both products are visible in the cart with correct prices, quantities and totals","stepMatchArguments":[]}]},
  {"pwTestLine":34,"pickleLine":37,"tags":["@regression","@cart","@happy","@test13"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When the user Cart clicks","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When the user opens a product detail page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then the product detail is visible","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"When the user sets quantity to 4","stepMatchArguments":[{"group":{"start":26,"value":"4","children":[]},"parameterTypeName":"int"}]},{"pwStepLine":39,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"And clicks Add to cart","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"And clicks View Cart quantity","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then the product is displayed in the cart with quantity 4","stepMatchArguments":[{"group":{"start":51,"value":"4","children":[]},"parameterTypeName":"int"}]}]},
]; // bdd-data-end