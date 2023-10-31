///<reference types="cypress" />

describe("First test suite", () => {
  context("First test suite - context", () => {
    it("First test suite", () => {
      cy.visit("");
    });
  });
  describe("Second describe inside", () => {});
});
