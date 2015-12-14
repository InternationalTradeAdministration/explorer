import {
  moduleForModel,
  test
} from 'ember-qunit';

import ConsolidatedScreeningListEntry from "explorer/models/consolidated-screening-list-entry";

moduleForModel('address', 'Address', {
  // Specify the other units that are required for this test.
  needs: ['model:consolidated-screening-list-entry']
});

test('it exists', function() {
  var model = this.subject();

  //var relationship = Ember.get(model, 'relationshipsByName').get('consolidated-screening-list-entry');

  //equal(relationship.key, 'consolidated-screening-list-entry');
  //equal(relationship.kind, 'belongsTo');

  // var store = this.store();
  ok(model);
});
