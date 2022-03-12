const { cyan } = require("colorette");

describe("Create new contracts", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Navigate and pick a new fixed contract", () => {
    var today = new Date().getDate();

    //Close cookies dialoge
    cy.contains("Necessary cookies only").click();

    //Start contract flow
    cy.contains("Create A Contract").click();

    //Choosing Fixed Rate contract, no unique attributes, selecting by unique text
    cy.contains("Fixed Rate").click();

    //Filling in the first page of the contract find most components by unique text and then travel to father component to fill in
    //Contract Name
    cy.contains("Contract name")
      .parent()
      .find("input")
      .type("Fixed Contract", { force: true });

    //Tax residence and state
    cy.contains("Contractor's tax residence")
      .parent()
      .type("United States{enter}");
    cy.contains("Choose a state").parent().type("Colorado{enter}");

    //Job title
    cy.contains("Job title").parent().type("QA Engineer");
    cy.contains("QA Engineer").click();

    //Seniority
    cy.contains("Seniority level").parent().type("Not applicable{enter}");

    //Scope of work
    cy.contains("Scope of work").parent().type("Automation");

    //Start date
    cy.contains("Contractor's start date").parent().click();

    //Today's date -1
    cy.get(".react-calendar__month-view__days")
      .contains(today - 1)
      .click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Currency, data tag available
    cy.get('[data-qa="currency-select"]').type("GBP - {enter}");
    cy.contains("Payment rate").parent().type("1000");
    cy.get("#react-select-7-input").click();
    cy.contains("Weekly").click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Add special clause
    cy.get('[data-qa="add-a-special-clause"]').click();
    cy.get(".textarea").type("nothing");

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Create contract, data tag available
    cy.get('[data-qa="create-contract"]').click();
  });
});
