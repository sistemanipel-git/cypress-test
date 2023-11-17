///<reference types="cypress" />

describe("First test suite", () => {
  context("First test suite - context", () => {
    it("First test suite", () => {
      cy.visit("pages");
    });
  });
  describe("Second describe inside", () => {});
});
