URL automation system https://demo.casino/

A programming based on JavaScript / NodeJs + Cypress.io was carried out for the test case of user registration and display of terms and conditions.

Two scripts were created:
a) CasinoDemo.cy.js - refers to the registration of a user, with the loading of data and their validation.
b) FindGame.cy.js - where the terms and conditions of use of the website are displayed from the initial screen, close that screen and click on the button to search for games.

A web service is incorporated, which, when consumed, returns the validation access key sent by email to the registered user to confirm their mailbox.

Required software installed
=============================

You must have the most recent versions of npm and node.js installed on the computer to run the tests.
The necessary installed modules can be installed with the npm command as explained in the NPM Dependencies section.

Start:
======
1- The web service must be executed in the folder where the system is located, from a console with the option:

node index.js

in which the process should be running on port 3051 of localhost.

2- The test cases can be executed by opening a second console in the same folder and with the instruction:

npm run cypress

in case you want to see the execution of the automation on the screen and running the script CasinoDemo.cy.js and FindGames.cy.js for the extra option.

This command will display a graphic screen where you must select:
1- E2E Testing
2- Chrome Browser
3- Click on Start E2E Testing
4- FindGame or CasinoDemo to start seeing the automation.

Both Scripts assume execution in an environment without users and therefore close the first welcome screen.

3- In the case of wanting to execute the tests by console, for CI or headless browser output, you can consider:

npm run test:casino
npm run test:find

as an order of execution. In this second option, the process will generate a video of the execution in the \cypress\video folder within the project and images in the \cypress\screenshots folder, the latter only in the event of a failure in the process.

Comments
============
In the case of reading the validation key by mail, a delay of 40 seconds was included while waiting for the mail to arrive.
Captcha can produce unwanted errors, its use should be avoided in the test environment.

File Distribution
=========================
The system distributes shares in cypress as follows:

- The test execution starts in the file:
\cypress\e2e\integration\CasinoDemo.cy.js

- For the Page Object Model replacement the cypress command option is used
\cypress\support\commands.js

- The data and selectors incorporated in Json format in the file are incorporated into the test:
\cypress\fixtures\example.Json

Modify data in the test
============================
It is possible to check the operation of the script by modifying the numerical values ​​in the Json file, with the command Ctrl+F, for example:
Search: ing14
and replace all with: ing15

will modify all the values ​​of testing14 to testing15, thus being able to generate another test with another user different from the previous one.

mailboxes available for testing: (web mail accessible via: https://mail.hostinger.com/)

user:testing15@emaras.com.ar 
password:Testing152022-
user:testing16@emaras.com.ar 
password:Testing162022-
user:testing17@emaras.com.ar 
password:Testing172022-
user:testing18@emaras.com.ar 
password:Testing182022-
user:testing19@emaras.com.ar 
password:Testing192022-
user:testing20@emaras.com.ar 
password:Testing202022-

The web service can only be used once per mailbox, since the same mailbox cannot be registered twice in the system.

npm dependencies
==================

Dependencies installed:

"cypress": "^10.7.0",
"imapflow": "^1.0.107",
"body-parser": "^1.20.0",
"express": "^4.18.1"

that are necessary for the execution of the scripts, for which it is necessary to install them with the command

npm install

It is possible to consult the installations in the package.json file included in the project.
