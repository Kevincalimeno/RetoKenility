// @ts-check
const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.js',
  outputDir: '.features-gen',  
});

module.exports = defineConfig({
  testDir: '.features-gen',      
  testMatch: '**/*.spec.js',     

  reporter: [['html']],

  use: {
    headless: false,
    trace: 'on-first-retry',
  },
});
