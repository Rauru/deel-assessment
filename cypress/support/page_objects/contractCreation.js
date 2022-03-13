const contractCreation = {
  navigateToContract() {
    //Close cookies dialoge
    cy.contains("Necessary cookies only").click();

    //Start contract flow
    cy.contains("Create A Contract").click();
  },

  fillContractByType(contractType) {
    //Choosing Fixed Rate contract, no unique attributes, selecting by unique text
    cy.contains(contractType).click();

    //Filling in the first page of the contract find most components by unique text and then travel to father component to fill in
    //Contract Name
    cy.contains("Contract name")
      .parent()
      .find("input")
      .type(contractType, { force: true });

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
    cy.contains("Contractor's start date").then((startDateSelector) => {
      const today = new Date().getDate();
      startDateSelector.parent().click();
      //Today's date -1
      cy.get(".react-calendar__month-view__days")
        .contains(today - 1)
        .click()
        .then(() => {
          expect(startDateSelector.parent()).to.contain(today - 1);
        });
    });

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    if (contractType == "Pay As You Go") {
      cy.get(".deel-ui__stack_vertical > :nth-child(6)").click();
    }

    //Currency, data tag available
    cy.get('[data-qa="currency-select"]').type("GBP - {enter}");
    cy.contains("Payment rate").parent().type("1000");
    cy.get("#react-select-7-input").click();
    cy.contains("Week").click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Next page button, data tag available
    cy.get('[data-qa="next"]').click();

    //Create contract, data tag available
    cy.get('[data-qa="create-contract"]').click();
  },
};

export default contractCreation;
