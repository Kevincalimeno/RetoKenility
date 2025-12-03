// Generated from: tests\features\contact_us.feature
import { test } from "playwright-bdd";

test.describe('Contact Us Form on AutomationExercise', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user opens the application at "http://automationexercise.com"', null, { page }); 
    await And('the home page is displayed successfully'); 
  });
  
  test('Submit contact us form successfully', { tag: ['@regression', '@contact', '@happy', '@test6'] }, async ({ When, Then, And, page }) => { 
    await When('the user navigates to contact "Contact us"', null, { page }); 
    await Then('the contact section "Get In Touch" is visible', null, { page }); 
    await And('the user fills the contact form with valid data', null, { page }); 
    await And('the user uploads a file "unnamed.jpg"', null, { page }); 
    await And('the user submits the contact form', null, { page }); 
    await Then('the contact success message is visible', null, { page }); 
    await When('the user returns to home', null, { page }); 
    await Then('the home page is displayed successfully'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\contact_us.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@regression","@contact","@happy","@test6"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user navigates to contact \"Contact us\"","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the contact section \"Get In Touch\" is visible","stepMatchArguments":[{"group":{"start":20,"value":"\"Get In Touch\"","children":[{"start":21,"value":"Get In Touch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And the user fills the contact form with valid data","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"And the user uploads a file \"unnamed.jpg\"","stepMatchArguments":[{"group":{"start":24,"value":"\"unnamed.jpg\"","children":[{"start":25,"value":"unnamed.jpg","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And the user submits the contact form","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the contact success message is visible","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user returns to home","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the home page is displayed successfully","stepMatchArguments":[]}]},
]; // bdd-data-end