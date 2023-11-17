///<reference types="cypress" />
describe("Dialog page", () => {
  it("Verify dialog form", () => {
    cy.visit("pages/modal-overlays/dialog");
    cy.get("[data-test='Enter Name']").click();
    cy.get("nb-dialog-container").should("be.visible");
    cy.get("nb-card-header").contains("Enter your name");
    cy.get(".size-medium.shape-rectangle");
    cy.get("button").contains("Cancel");
    cy.get("button").contains("Submit");
  });
});
