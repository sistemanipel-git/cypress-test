export class LoginClass {
  getEmailInput() {
    return cy.get("#inputEmail3");
  }
  getPasswordInput() {
    return cy.get("#inputPassword3");
  }
}
