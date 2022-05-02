const templateUrls = require("../fixtures/pages.js");

describe("Templates", () => {
  for (let [name, url] of Object.entries(templateUrls)) {
    it(`Templates: ${name}`, () => {
      cy.visit(url);
      cy.percySnapshot(name);
    });
  }
});
