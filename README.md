# Deel-assessment

Automation suite made with Cypress, github actions and Allure

## Tools Used
- [Cypress](https://www.cypress.io/) was the testing framework used.
- [Github Actions](https://github.com/features/actions) was used as the CI/CD platform
- [Allure](https://docs.qameta.io/allure/) for test reporting locally
- [allure-commandline](https://www.npmjs.com/package/allure-commandline) and [@shelex/cypress-allure-plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin)


## Running it
Go to the root directory of this project and install packages with ```npm install```

Running  ``` npm test``` kicks off the project.
``` npx cypress open``` can be used to open the Cypress dashboard.
``` npx cypress run``` can be used to run the Cypress test reporter.
Parallel tests needs to be triggered from the Github Actions manually or by making a commit.


## Achieved Scope
The project includes **all** mandatory and bonus features.

### Write a test to create a "Fixed Rate" contract using the best practices
-	Created a hook to log in the web app.
-	Added session handling to keep the session open between each test.
- Created a script to navigate and choose which type of contract to create.
- Created the necessary scripts and assertions to fill in the forms and finish the create contract flow.
- Used Cypress as the test framework and test runner.
- Used allure as the reporter locally.

### Create tests for other contract types and run the tests in parallel
-	Created a test page object to reutilize the code and support more than one type of contract testing(DRY)
-	Created the necessary github actions and yaml file to run the 2 tests in parallel in different virtual machines, Cypress doesn't support parallel testing locally unless different dashboards are opened manually and run the separate tests manually
