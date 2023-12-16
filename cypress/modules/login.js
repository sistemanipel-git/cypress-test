import { LoginClass } from "../pages/loginPage";

const loginPage = new LoginClass();

export function performLogin(username, password) {
  loginPage.getEmailInput().clear().type(username);
  loginPage.getPasswordInput().clear().type(password);
  loginPage.getCheckBox().eq(2).click();
  loginPage.getCheckBoxChecked();
  loginPage.getSignInButton().click();
}