///<reference types="cypress" />
describe("tests HW12 suite", () => {
  it("loginFormSignIn", () => {
    cy.visit("pages/forms/layouts");
    cy.get("#inputEmail3").clear().type("test@email.com");
    cy.get("#inputPassword3").clear().type("1234567");
    cy.get("span[class='custom-checkbox']").eq(2).click();
    cy.get("span[class='custom-checkbox checked']");
  });
});
