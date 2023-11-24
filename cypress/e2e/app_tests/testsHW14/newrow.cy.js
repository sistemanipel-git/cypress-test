///<reference types="cypress" />
describe("editing table", () => {
  it("add new row", () => {
    cy.visit("pages/tables/smart-table");
    cy.get(".nb-plus").click();
    cy.get(".nb-checkmark");
  });
});
