import contractCreation from "../../support/page_objects/contractCreation";

describe("Create new contracts", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Navigate and pick a new fixed contract", () => {
    contractCreation.navigateToContract();
    contractCreation.fillContractByType("Fixed Rate");
  });
});
