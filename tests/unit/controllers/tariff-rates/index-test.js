import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:tariff-rates/index', 'TariffRatesIndexController', {
  needs: ['controller:tariff-rates']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
