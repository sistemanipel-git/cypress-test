///<reference types="cypress" />
describe("Checking headers", () => {
  it("Register form", () => {
    cy.visit("auth/register");
    cy.get("nb-register").within(() => {
      cy.get(".title").contains("Register");
      cy.get(".form-control-group").contains("Full name:");
      cy.get(".form-control-group").contains("Email address:");
      cy.get(".form-control-group").contains("Password:");
      cy.get(".form-control-group").contains("Repeat password:");
      cy.get(".text");
      cy.get(".github.with-icon");
      cy.get(".facebook.with-icon");
      cy.get(".twitter.with-icon");
    });
  });
});
