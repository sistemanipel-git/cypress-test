///<reference types="cypress" />

//const { Button } = require("bootstrap");

describe("tests HW12 suite", () => {
  it("step-by-stepTextChecking", () => {
    cy.visit("pages/layout/stepper");

    cy.get(".lorem.ng-star-inserted").contains("Proin varius");
    cy.get(
      ".appearance-filled.size-medium.status-primary.shape-rectangle.ng-star-inserted.transitions",
    )
      .eq(3)
      .click();
    cy.get(".lorem.ng-star-inserted").contains("Curabitur luctus");
    cy.get(
      ".appearance-filled.size-medium.status-primary.shape-rectangle.ng-star-inserted.transitions",
    )
      .eq(3)
      .click();
    cy.get(".lorem.ng-star-inserted").contains("Proin varius");
    cy.get(
      ".appearance-filled.size-medium.status-primary.shape-rectangle.ng-star-inserted.transitions",
    )
      .eq(3)
      .click();
  });
});
