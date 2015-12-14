import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:business-service-providers/index', 'BusinessServiceProvidersIndexController', {
  // Specify the other units that are required for this test.
  needs: ['controller:business-service-providers']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
