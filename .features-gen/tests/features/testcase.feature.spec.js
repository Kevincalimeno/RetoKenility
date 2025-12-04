// Generated from: tests\features\testcase.feature
import { test } from "playwright-bdd";

test.describe('Navigate Through Test Cases', () => {

  test.beforeEach('Background', async ({ Given, And, page }, testInfo) => { if (testInfo.error) return;
    await Given('the user opens the application at "http://automationexercise.com"', null, { page }); 
    await And('the home page is displayed successfully'); 
  });
  
  test('Open Test Case 1', { tag: ['@regression', '@navigation', '@test7'] }, async ({ When, Then, And, page }) => { 
    await When('the user navigates to testcases "Test Cases"', null, { page }); 
    await And('the user opens test case "Test Case 1: Register User"', null, { page }); 
    await Then('the test case content is visible', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\testcase.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":11,"tags":["@regression","@navigation","@test7"],"steps":[{"pwStepLine":7,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user opens the application at \"http://automationexercise.com\"","isBg":true,"stepMatchArguments":[{"group":{"start":34,"value":"\"http://automationexercise.com\"","children":[{"start":35,"value":"http://automationexercise.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the home page is displayed successfully","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user navigates to testcases \"Test Cases\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Test Cases\"","children":[{"start":33,"value":"Test Cases","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user opens test case \"Test Case 1: Register User\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Test Case 1: Register User\"","children":[{"start":26,"value":"Test Case 1: Register User","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the test case content is visible","stepMatchArguments":[]}]},
]; // bdd-data-end