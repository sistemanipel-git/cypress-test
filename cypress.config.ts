import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/pages",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "cypress/e2e/app_tests/firstTest.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
