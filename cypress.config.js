const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'fbq2k',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
