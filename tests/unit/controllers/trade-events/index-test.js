import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:trade-events/index', 'TradeEventsIndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:trade-events']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
