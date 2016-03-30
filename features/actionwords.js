var assert = require('assert');

exports.Actionwords = {
  iStartTheCoffeeMachine: function (lang) {
    this.sut.start(lang);
  },

  iShutdownTheCoffeeMachine: function () {
    this.sut.stop();
  },

  messageMessageShouldBeDisplayed: function (message) {
    assert.equal(message || "", this.sut.get('message'));
  },

  coffeeShouldBeServed: function () {
    assert.equal(true, this.sut.get('coffeeServed'));
  },

  coffeeShouldNotBeServed: function () {
    assert.equal(false, this.sut.get('coffeeServed'));
  },

  iTakeACoffee: function () {
    this.sut.takeCoffee();
  },

  iEmptyTheCoffeeGrounds: function () {
    this.sut.emptyGrounds();
  },

  iFillTheBeansTank: function () {
    this.sut.fillBeans();
  },

  iFillTheWaterTank: function () {
    this.sut.fillTank();
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
    this.iStartTheCoffeeMachine();
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
  }
};