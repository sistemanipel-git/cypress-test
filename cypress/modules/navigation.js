export function navigateTo(urlName) {
  cy.visit(`${urlName}`);
}
