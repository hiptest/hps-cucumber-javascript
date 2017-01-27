var assert = require('assert');

exports.Actionwords = {
  getCoffeeMachine: function () {
    if (this.coffeeMachine === undefined) {
      this.coffeeMachine = require('../src/coffee_machine.js').CoffeeMachine();
    }
    return this.coffeeMachine;
  },

  iStartTheCoffeeMachineUsingLanguageLang: function (lang) {
    this.getCoffeeMachine().start(lang);
  },

  iShutdownTheCoffeeMachine: function () {
    this.getCoffeeMachine().stop();
  },

  messageMessageShouldBeDisplayed: function (message) {
    assert.equal(message || "", this.getCoffeeMachine().get('message'));
  },

  coffeeShouldBeServed: function () {
    assert.equal(true, this.getCoffeeMachine().get('coffeeServed'));
  },

  coffeeShouldNotBeServed: function () {
    assert.equal(false, this.getCoffeeMachine().get('coffeeServed'));
  },

  iTakeACoffee: function () {
    this.getCoffeeMachine().takeCoffee();
  },

  iEmptyTheCoffeeGrounds: function () {
    this.getCoffeeMachine().emptyGrounds();
  },

  iFillTheBeansTank: function () {
    this.getCoffeeMachine().fillBeans();
  },

  iFillTheWaterTank: function () {
    this.getCoffeeMachine().fillTank();
  },

  iTakeCoffeeNumberCoffees: function (coffee_number) {
    while ((coffee_number > 0)) {
      this.iTakeACoffee();
      coffee_number = coffee_number - 1;

      if (this.handledTanks.indexOf('water') >= 0) {
        this.iFillTheWaterTank();
      }

      if (this.handledTanks.indexOf('beans') >= 0) {
        this.iFillTheBeansTank();
      }

      if (this.handledTanks.indexOf('grounds') >= 0) {
        this.iEmptyTheCoffeeGrounds();
      }
    }
  },

  theCoffeeMachineIsStarted: function () {
    this.iStartTheCoffeeMachineUsingLanguageLang();
  },

  _handledTanks: function () {
    if (this.handledTanks === undefined) {
      this.handledTanks = [];
    }
  },

  iHandleWaterTank: function () {
    this._handledTanks();
    this.handledTanks.push('water');
  },

  iHandleBeans: function () {
    this._handledTanks();
    this.handledTanks.push('beans');
  },

  iHandleCoffeeGrounds: function () {
    this._handledTanks();
    this.handledTanks.push('grounds');
  },

  iHandleEverythingExceptTheWaterTank: function () {
      this.iHandleCoffeeGrounds();
      this.iHandleBeans();
  },

  iHandleEverythingExceptTheBeans: function () {
      this.iHandleWaterTank();
      this.iHandleCoffeeGrounds();
  },

  iHandleEverythingExceptTheGrounds: function () {
      this.iHandleWaterTank();
      this.iHandleBeans();
  },

  displayedMessageIs: function (__free_text) {
      this.messageMessageShouldBeDisplayed(__free_text);
  },

  iSwitchToSettingsMode: function () {
    this.getCoffeeMachine().showSettings();
  },

  settingsShouldBe: function (__datatable) {
    var hashSettings = this.getCoffeeMachine().getSettings(),
      settings = Object.keys(hashSettings).map(function(key) {
        return [key, hashSettings[key]]
      });

    assert.deepEqual(__datatable.raw(), settings);
  }
};
