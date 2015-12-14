import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('trade-event', 'TradeEvent', {
  // Specify the other units that are required for this test.
  needs: ['model:contact', 'model:venue']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
