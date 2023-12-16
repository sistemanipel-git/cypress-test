export class LoginClass {
  getEmailInput() {
    return cy.get("#inputEmail3");
  }
  getPasswordInput() {
    return cy.get("#inputPassword3");
  }
  getCheckBox() {
    return cy.get("span[class='custom-checkbox']");
  }
  getCheckBoxChecked() {
    return cy.get("span[class='custom-checkbox checked']");
  }
}
