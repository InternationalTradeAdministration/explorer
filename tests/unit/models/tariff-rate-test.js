import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('tariff-rate', 'TariffRate', {
  needs: ['model:annual-rate']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
