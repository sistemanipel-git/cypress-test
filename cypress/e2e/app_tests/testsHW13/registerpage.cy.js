///<reference types="cypress" />
describe("tests HW13 suite", () => {
  it("Register page", () => {
    cy.visit("auth/register");

    cy.get(".title").contains("Register");

    cy.get(".form-control-group").contains("Full name:").type("Huba Buba");

    cy.get(".form-control-group").contains("Email address:").type("Huba@Buba");

    cy.get(".form-control-group").contains("Password:").type("HubaBuba");

    cy.get(".form-control-group").contains("Repeat password:").type("HubaBuba");

    cy.get(".custom-checkbox").click();

    cy.get(".custom-checkbox.checked");

    cy.get("#input-name").should("have.value", "Huba Buba");

    cy.get("#input-email").should("have.value", "Huba@Buba");
  });
});
