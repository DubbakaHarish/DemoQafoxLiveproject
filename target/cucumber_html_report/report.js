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
formatter.scenario({
  "line": 17,
  "name": "Verify wheather the user is not allowed to register on skipping the mondatory fields",
  "description": "",
  "id": "registration-functionality-scenario;verify-wheather-the-user-is-not-allowed-to-register-on-skipping-the-mondatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Register"
    },
    {
      "line": 16,
      "name": "@two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I Navigate to Account Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on continue button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see the user account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see the error messages informing the user to fill the mondatory fields",
  "keyword": "And "
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
formatter.scenario({
  "line": 26,
  "name": "Verify weather the user is able to Register into the application by providing all the fields",
  "description": "",
  "id": "registration-functionality-scenario;verify-weather-the-user-is-able-to-register-into-the-application-by-providing-all-the-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Register"
    },
    {
      "line": 25,
      "name": "@three"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I Navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provid the all below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Harish"
      ],
      "line": 30
    },
    {
      "cells": [
        "LastName",
        "Dubbaka"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email",
        "dubbakaharish4@gmail.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Telephone",
        "9703716965"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "H@rish450"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I subscribe to newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select the privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 41,
  "name": "Verify whether the user is restricted from registring a duplicate account",
  "description": "",
  "id": "registration-functionality-scenario;verify-whether-the-user-is-restricted-from-registring-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Register"
    },
    {
      "line": 40,
      "name": "@four"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I provide the below duplicate details into the fields",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Harish"
      ],
      "line": 45
    },
    {
      "cells": [
        "LastName",
        "Dubbaka"
      ],
      "line": 46
    },
    {
      "cells": [
        "Email",
        "dubbakaharish4@gmail.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Telephone",
        "9703716965"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        "H@rish450"
      ],
      "line": 49
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select the privacy policy",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see the warning message stating that the user is already created",
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