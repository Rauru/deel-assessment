// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Loggin in by api results in a 403 forbidden, loggin in by form
Cypress.Commands.add("login", () => {
  //cy.session("logedIn", () => {
  cy.visit("http://app.deel.training/login");
  cy.get("#mui-1").type("raul_lopez@unitec.edu");
  cy.get("#mui-2").type("Tenlong12@");
  cy.get("form").submit();
  cy.url().should("contain", "https://app.deel.training/");
  // });
});
