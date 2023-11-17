///<reference types="cypress" />
describe("tests HW13 suite", () => {
  it("Register page", () => {
    cy.visit("auth/register");

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
