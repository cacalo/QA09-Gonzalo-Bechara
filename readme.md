# QA09: Form checking excercise - by Gonzalo Bechara
This exercise is comprised by two HTML files with webpages, two CSS for style and a few .js files with some functionality.
The objective is to test that each site has the right components in it and to validate all the fields entered by de user.

## Project .js composition
I separated the functionality of the tests in 3 different files:
* **alertBox.js**: Holds the functionality that display different error or success messages on the html page.
* **tests.js**: Holds the engine for the tests to occur.
* **validateinputs.js**: Contains functions to validate that each field is filled within each page before being able to submit the form.
* **login.js / register.js**: Call the tests each site is designed to do.

# QA14: Web automation tests update
A new testing module has been added to the project. It can be run by executing "npm run test".
A set of three tests for each page were created.