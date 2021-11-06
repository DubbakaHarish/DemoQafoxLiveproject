$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration functionality scenario",
  "description": "",
  "id": "registration-functionality-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify weather the user is able to Register into the application by providing all the fields",
  "description": "",
  "id": "registration-functionality-scenario;verify-weather-the-user-is-able-to-register-into-the-application-by-providing-all-the-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Register"
    },
    {
      "line": 2,
      "name": "@one"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I provid the all below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Harish"
      ],
      "line": 7
    },
    {
      "cells": [
        "LastName",
        "Dubbaka"
      ],
      "line": 8
    },
    {
      "cells": [
        "Email",
        "dubbakaharish4@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "Telephone",
        "9703716965"
      ],
      "line": 10
    },
    {
      "cells": [
        "Password",
        "H@rish450"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I select the privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see that the user account has been  sucessfully created",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});