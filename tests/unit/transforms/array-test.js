import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('transform:array', 'ArrayTransform', {
});

test('deserialize', function() {
  var transform = this.subject();
  expect(4);

  deepEqual(transform.deserialize(null), []);
  deepEqual(transform.deserialize('notanarray'), []);
  deepEqual(transform.deserialize([]), []);
  deepEqual(transform.deserialize(['an', 'array']), ['an', 'array']);
});

test('serialize', function() {
  var transform = this.subject();
  expect(7);

  deepEqual(transform.serialize(null), []);
  deepEqual(transform.serialize(1), [1]);
  deepEqual(transform.serialize(false), [false]);
  deepEqual(transform.serialize('1'), ['1']);
  deepEqual(transform.serialize('one,two'), ['one', 'two']);
  deepEqual(transform.serialize(['one,two']), ['one,two']);
  deepEqual(transform.serialize(['one', 'two']), ['one', 'two']);
});
