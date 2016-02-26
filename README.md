# hps-cucumber-javascript
[![Build Status](https://travis-ci.org/hiptest/hps-cucumber-javascript.svg?branch=master)](https://travis-ci.org/hiptest/hps-cucumber-javascript)

Hiptest publisher samples with Cucumber/Javascript

In this repository you'll find tests generated in Cucumber/Javascript format from [Hiptest](https://hiptest.net), using [Hiptest publisher](https://github.com/hiptest/hiptest-publisher).

The goals are:

 * to show how tests are exported in Cucumber/Javascript.
 * to check exports work out of the box (well, with implemented actionwords)

System under test
------------------

The SUT is a (not that much) simple coffee machine. You start it, you ask for a coffee and you get it, sometimes. But most of times you have to add water or beans, empty the grounds. You have an automatic expresso machine at work or at home? So you know how it goes :-)

Prerequesites
-------------

* [Node.js](https://nodejs.org/en/) or [io.js](https://iojs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Hiptest publisher](https://github.com/hiptest/hiptest-publisher)

Update tests
-------------

To update the tests:

    hiptest-publisher -c cucumber-js.conf --only=features,step_definitions

The tests are generated in the [``features``](https://github.com/hiptest/hps-cucumber-javascript/tree/master/features) directory.


Run tests
---------

To build the project and run the tests, use the following command:

    npm install
    node_modules/.bin/cucumber-js --format=json | node_modules/cucumber-junit/bin/cucumber-junit --features-as-suites > junit_output.xml

The SUT implementation can be seen in [``src/coffee_machine.js!``](https://github.com/hiptest/hps-cucumber-javascript/blob/master/src/coffee_machine.js)

The test report is generated in ```junit_output.xml```
