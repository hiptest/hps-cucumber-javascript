var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Before, After, Given, When, Then}) {
    Before(function (scenario) {
        this.actionwords = Object.create(require('./actionwords.js').Actionwords);
    });

    After(function (scenario) {
        this.actionwords = null;
    });


    When('I start the coffee machine using language {string}', function (lang, callback) {
        this.actionwords.iStartTheCoffeeMachineUsingLanguageLang(lang);
        callback();
    });

    When('I shutdown the coffee machine', function (callback) {
        this.actionwords.iShutdownTheCoffeeMachine();
        callback();
    });

    Then('message {string} should be displayed', function (message, callback) {
        this.actionwords.messageMessageShouldBeDisplayed(message);
        callback();
    });

    Then('coffee should be served', function (callback) {
        this.actionwords.coffeeShouldBeServed();
        callback();
    });

    Then('coffee should not be served', function (callback) {
        this.actionwords.coffeeShouldNotBeServed();
        callback();
    });

    When('I take a coffee', function (callback) {
        this.actionwords.iTakeACoffee();
        callback();
    });

    When('I empty the coffee grounds', function (callback) {
        this.actionwords.iEmptyTheCoffeeGrounds();
        callback();
    });

    When('I fill the beans tank', function (callback) {
        this.actionwords.iFillTheBeansTank();
        callback();
    });

    When('I fill the water tank', function (callback) {
        this.actionwords.iFillTheWaterTank();
        callback();
    });

    When('I take {string} coffees', function (coffee_number, callback) {
        this.actionwords.iTakeCoffeeNumberCoffees(coffee_number);
        callback();
    });

    Given('the coffee machine is started', function (callback) {
        this.actionwords.theCoffeeMachineIsStarted();
        callback();
    });

    Given('I handle everything except the water tank', function (callback) {
        this.actionwords.iHandleEverythingExceptTheWaterTank();
        callback();
    });

    Given('I handle water tank', function (callback) {
        this.actionwords.iHandleWaterTank();
        callback();
    });

    Given('I handle beans', function (callback) {
        this.actionwords.iHandleBeans();
        callback();
    });

    Given('I handle coffee grounds', function (callback) {
        this.actionwords.iHandleCoffeeGrounds();
        callback();
    });

    Given('I handle everything except the beans', function (callback) {
        this.actionwords.iHandleEverythingExceptTheBeans();
        callback();
    });

    Given('I handle everything except the grounds', function (callback) {
        this.actionwords.iHandleEverythingExceptTheGrounds();
        callback();
    });

    Then('displayed message is:', function (__free_text, callback) {
        this.actionwords.displayedMessageIs(__free_text);
        callback();
    });

    When('I switch to settings mode', function (callback) {
        this.actionwords.iSwitchToSettingsMode();
        callback();
    });

    Then('settings should be:', function (__datatable, callback) {
        this.actionwords.settingsShouldBe(__datatable);
        callback();
    });
});