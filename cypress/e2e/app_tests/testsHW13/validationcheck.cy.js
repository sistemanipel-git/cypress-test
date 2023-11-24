///<reference types="cypress" />
describe("Checking error", () => {
  it("Validation check", () => {
    cy.visit("auth/register");
    cy.get("nb-register").within(() => {
      cy.get('Input[name="fullName"]').clear().type("1");
      cy.get(".title").contains("Register").click();
      cy.get(".caption.status-danger")
        .eq(0)
        .should(
          "have.text",
          " Full name should contains from 4 to 50 characters ",
        );
      cy.get('Input[name="email"]').clear().type("1");
      cy.get(".title").contains("Register").click();
      cy.get(".caption.status-danger")
        .eq(1)
        .should("have.text", " Email should be the real one! ");
    });
  });
});
