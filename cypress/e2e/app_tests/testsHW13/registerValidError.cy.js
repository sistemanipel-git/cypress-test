///<reference types="cypress" />

const { Input } = require("@angular/core");

describe("tests HW13 suite", () => {
  it("registerValidError", () => {
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

    cy.get('Input[name="fullName"]').clear().type("1");
    cy.get(".caption.status-danger")
      .eq(0)
      .should(
        "have.text",
        " Full name should contains from 4 to 50 characters ",
      );
    cy.get('Input[name="email"]').clear().type("1");
    cy.get(".caption.status-danger")
      .eq(1)
      .should("have.text", " Email should be the real one! ");
    cy.get(".github.with-icon");
    cy.get(".facebook.with-icon");
    cy.get(".twitter.with-icon");
    cy.get('Input[name="fullName"]').clear().type("Huba Buba");
    cy.get('Input[name="email"]').clear().type("Huba@Buba");
    cy.get("button:contains(Register)").click();
  });
});
