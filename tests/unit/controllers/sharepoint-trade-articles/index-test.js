import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:sharepoint-trade-articles/index', 'SharepointTradeArticlesIndexController', {
  // Specify the other units that are required for this test.
   needs: ['controller:sharepoint-trade-articles']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
