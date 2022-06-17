const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: 'https://example.cypress.io'
  },
  env: {
    GET_RESPONSE_TIME: true
  },
});
