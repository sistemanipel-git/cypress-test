///<reference types="cypress" />

//const { Button } = require("bootstrap");

describe("Dialog page", () => {
  it("step-by-stepTextChecking", () => {
    cy.visit("pages/layout/stepper");

    cy.get(".lorem.ng-star-inserted").as("headerText");
    cy.get(".vertical ").contains("next").as("nextButton");
    cy.get("@headerText").should("contain", "Proin varius");
    cy.get("nextButton").click();
    cy.get("@headerText").should("contain", "Curabitur luctus");
    cy.get("nextButton").click();
    cy.get("@headerText").should("contain", "Proin varius");
    cy.get("nextButton").should("be.disabled");
  });
});
