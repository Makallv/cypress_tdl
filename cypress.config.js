const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zxg9gg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://www.saucedemo.com",
  },
});
