import Ember from 'ember';
import ExpandableMixin from 'explorer/mixins/expandable';

module('ExpandableMixin');

// Replace this with your real tests.
test('it works', function() {
  var ExpandableObject = Ember.Object.extend(ExpandableMixin);
  var subject = ExpandableObject.create();
  ok(subject);
});
