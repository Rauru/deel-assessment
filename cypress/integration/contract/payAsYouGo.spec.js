import contractCreation from "../../support/page_objects/contractCreation";

describe("Create new Pay As You Go contract", () => {
  beforeEach(() => {
    cy.login();
  });

  it("Navigate and pick a new Pay As You Go contract", () => {
    contractCreation.navigateToContract();
    contractCreation.fillContractByType("Pay As You Go");
  });
});
