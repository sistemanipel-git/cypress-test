import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

export function performLogin(username, password) {
  loginPage.getEmailInput().clear().type(username);
  loginPage.passwordInput().clear().type(password);
}
