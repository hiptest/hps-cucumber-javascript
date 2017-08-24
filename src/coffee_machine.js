exports.CoffeeMachine = function CoffeeMachine () {
  instance = new Object();
  instance.attributes = {
    _tank: 60,
    _beans: 40,
    _grounds: 0,
    _countdownToDescale: 500,
    _started: false,
    _coffeeServed: false,
    _message: '',
    _lang: 'en',
    _settingsDisplayed: false,
    _waterHardness: '2',
    _grinder: 'medium'
  }

  instance.i18n = {
    en: {
      tank: 'Fill tank',
      beans: 'Fill beans',
      grounds: 'Empty grounds',
      ready: 'Ready',
      settings: 'Settings:\n - 1: water hardness\n - 2: grinder',
      descale: 'Descaling is needed'
    },

    fr: {
      tank: 'Remplir reservoir',
      beans: 'Ajouter grains',
      grounds: 'Vider marc',
      ready: 'Pret',
      settings: 'Configurer:\n - 1: durete de l eau\n - 2: mouture',
      descale: 'Detartrage requisd'
    }
  }

  instance.listeners = {}

  instance.set = function (name, value) {
    instance.attributes['_' + name] = value;
    instance.triggerListeners(name);
  }

  instance.get = function (name) {
    return instance.attributes['_' + name];
  }

  instance.addListener = function (name, f) {
    if (instance.listeners[name] === undefined) {
      instance.listeners[name] = [];
    }
    instance.listeners[name].push(f)
  }

  instance.triggerListeners = function (name) {
    var listeners = instance.listeners[name] || [],
      value = instance.get(name);

    listeners.forEach(function (listener) {
      listener.call(null, value);
    });
  }

  var updateMessage = function () {
    var messages = instance.i18n[instance.get('lang')];

    if (!instance.get('started')) {
      instance.set('message', '');
      return;
    }

    if (instance.get('settingsDisplayed')) {
      instance.set('message', messages.settings);
      return;
    }

    if (instance.get('tank') <= 10) {
      instance.set('message', messages.tank);
      return;
    }

    if (instance.get('beans') < 3) {
      instance.set('message', messages.beans);
      return;
    }

    if (instance.get('grounds') >= 30) {
      instance.set('message', messages.grounds);
      return;
    }

    if (instance.isDescalingNeeded()) {
      instance.set('message', messages.descale);
      return;
    }

    instance.set('message', messages.ready);
  }

  instance.addListener('started', updateMessage);
  instance.addListener('tank', updateMessage);
  instance.addListener('beans', updateMessage);
  instance.addListener('grounds', updateMessage);
  instance.addListener('countdownToDescale', updateMessage);
  instance.addListener('settingsDisplayed', updateMessage);


  instance.start = function (lang) {
    instance.set('lang', lang || 'en');
    instance.set('started', true);
    instance.set('coffeeServed', false);
  }

  instance.stop = function () {
    instance.set('started', false);
  }

  instance.takeCoffee = function () {
    if (! instance.get('started')) {
      return;
    }

    if (instance.get('tank') === 0 || instance.get('beans') === 0) {
      instance.set('coffeeServed', false);
      return;
    }

    instance.set('coffeeServed', true);
    instance.set('tank', instance.get('tank') - 1);
    instance.set('beans', instance.get('beans') - 1);
    instance.set('grounds', instance.get('grounds') + 1);
    instance.set('countdownToDescale', instance.get('countdownToDescale') - 1);
  }

  instance.fillTank = function () {
    instance.set('tank', 60);
  }

  instance.fillBeans = function () {
    instance.set('beans', 40);
  }

  instance.emptyGrounds = function () {
    instance.set('grounds', 0);
  }

  instance.showSettings = function () {
    this.set('settingsDisplayed', true);
  }

  instance.getSettings = function () {
    return {
      'water hardness': this.get('waterHardness'),
      'grinder': this.get('grinder')
    }
  }

  instance.descale = function () {
    this.set('countdownToDescale', 500);
  }

  instance.isDescalingNeeded = function () {
    return this.get('countdownToDescale') <= 0;
  }

  return instance;
}
