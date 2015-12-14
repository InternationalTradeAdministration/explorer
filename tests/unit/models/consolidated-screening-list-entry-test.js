import {
  moduleForModel,
  test
} from 'ember-qunit';

import Address from "explorer/models/address";
import Identification from "explorer/models/identification";

moduleForModel('consolidated-screening-list-entry', 'ConsolidatedScreeningListEntry', {
  needs: ['model:address', 'model:identification']
});

test('it exists', function() {
  var model = this.subject({name: 'Foo', alt_names: ['Bar', 'Baz']});

  ok(model);
});
