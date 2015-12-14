import {
  moduleForModel,
  test
} from 'ember-qunit';

import ConsolidatedScreeningListEntry from "explorer/models/consolidated-screening-list-entry";

moduleForModel('identification', 'Identification', {
  // Specify the other units that are required for this test.
  needs: ['model:consolidated-screening-list-entry']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
