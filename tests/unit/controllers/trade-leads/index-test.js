import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:trade-leads/index', 'TradeLeadsIndexController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: ['controller:trade-leads']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
