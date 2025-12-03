// @ts-check
const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

// Genera tests dentro de .features-gen
const testDir = defineBddConfig({
  features: 'tests/features/**/*.feature',
  steps: 'tests/steps/**/*.js',
  outputDir: '.features-gen',   // <--- IMPORTANTÍSIMO
});

module.exports = defineConfig({
  testDir: '.features-gen',      // <--- Donde están los .spec.js generados
  testMatch: '**/*.spec.js',     // <--- Coincide con los archivos generados

  reporter: [['html']],

  use: {
    headless: false,
    trace: 'on-first-retry',
  },
});
