///<reference types="cypress" />
describe("editing table", () => {
  it("add new row", () => {
    cy.visit("pages/tables/smart-table");
    //     cy.get("i.nb-edit").eq(0).click();
    //     cy.get("input:text.form-control.ng-untouched.ng-pristine.ng-valid")
    //       .eq(7)
    //       .clear()
    //       .type("I am");
    //     cy.get("i.nb-checkmark").click();
    //     cy.get("div.ng-star-inserted");
    //   });
    // });

    cy.get("tr[ng-reflect-klass='ng2-smart-row']")
      .eq(0)
      .within(() => {
        cy.get(".nb-edit").click();
        cy.get("input[placeholder='First Name']").clear().type("I am");
        cy.get(".nb-checkmark").click();
        cy.get(".ng-star-inserted").eq(6).should("have.text", "I am");
      });
  });
});
