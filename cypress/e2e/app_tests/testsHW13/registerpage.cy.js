///<reference types="cypress" />
describe("New User Registration", () => {
  it("Register form", () => {
    cy.visit("auth/register");
    cy.get("nb-register").within(() => {
      cy.get(".title").contains("Register");
      cy.get(".form-control-group").contains("Full name:").type("Huba Buba");
      cy.get(".form-control-group")
        .contains("Email address:")
        .type("Huba@Buba");
      cy.get(".form-control-group").contains("Password:").type("HubaBuba");
      cy.get(".form-control-group")
        .contains("Repeat password:")
        .type("HubaBuba");
      cy.get(".custom-checkbox").click();
      cy.get(".custom-checkbox.checked");
      cy.get("#input-name").should("have.value", "Huba Buba");
      cy.get("#input-email").should("have.value", "Huba@Buba");
      cy.get("button:contains(Register)").click();
    });
    cy.wait(2000);
    cy.get(".menu-group.ng-tns-c15-0");
  });
});
