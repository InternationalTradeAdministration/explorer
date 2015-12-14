import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('serializer:application', 'ApplicationSerializer');


test('default factory instance is valid', function() {
  var serializer = this.subject();
  ok(serializer);
});


test('extractArray', function() {
  var serializer = this.subject();

  var payload = {
    total: 10,
    offset: 0,
    results: [{name: 'Foo'}, {name: 'Bar'}]
  };
  var expected = [
    {id: 'fff597ad08958e1a2323178cae519093', name: 'Foo'},
    {id: 'b0888bb5661cbbe349bba38a83ece69e', name: 'Bar'}];

  var extracted = serializer.extractArray({}, 'N/A', payload);
  deepEqual(extracted, expected);
});


test('extractSingle: array attributes', function() {
  var serializer = this.subject();

  var payload = {
    name:            'Foobius Barius',
    alt_names:       ['Fubar', 'Foo to the Bar'],
    nationalities:   ['US'],
    citizenships:    [],
    dates_of_birth:  ['2013-12-25', '1988-08-08'],
    places_of_birth: ['GB', 'FR']};

  var expected = {
    name:            'Foobius Barius',
    alt_names:       ['Fubar', 'Foo to the Bar'],
    nationalities:   ['US'],
    citizenships:    [],
    dates_of_birth:  ['2013-12-25', '1988-08-08'],
    places_of_birth: ['GB', 'FR'],
    id:              "b752cf8dc78aa27957208331aeae96e5"};

  var extracted = serializer.extractSingle({}, 'N/A', payload);
  deepEqual(extracted, expected);
});


test('extractSingle: name and addresses', function() {
  var serializer = this.subject();

  var pushedToStore = [];
  var storeMock = Ember.Object.extend({
    push: function(modelType, item){ pushedToStore.push(item); }
  }).create();

  var payload = {
    name: 'Foobius Barius',
    addresses: [{
      address: "123 High Street",
      city: "Springfield",
      state: "ZZ",
      postal_code: "12345",
      country: "US" },
    { address: "987 Low Street",
      city: "Summerplane",
      state: "ZZ",
      postal_code: "98765",
      country: "US" }]};

  var extracted = serializer.extractSingle(storeMock, 'N/A', payload);

  var expectedExtractSingle = {
    addresses: ["936f030854aea0ec3793b958ef689212", "bd91a75d10a5fd247a0512961d1815e9"],
    id: "b752cf8dc78aa27957208331aeae96e5",
    name: "Foobius Barius" };

  var expectedPushedToStore = [{
    address: "123 High Street",
    city: "Springfield",
    country: "US",
    id: "936f030854aea0ec3793b958ef689212",
    postal_code: "12345",
    state: "ZZ" }, {
    address: "987 Low Street",
    city: "Summerplane",
    country: "US",
    id: "bd91a75d10a5fd247a0512961d1815e9",
    postal_code: "98765",
    state: "ZZ" }];

  deepEqual(extracted, expectedExtractSingle);
  deepEqual(pushedToStore, expectedPushedToStore);
});


test('generateId', function() {
  var serializer = this.subject();
  var id = serializer.generateId(
    'app@model:foo:', {foo: 'bar', yin: 'yang', monkey: ['magic']});
  equal(id, 'fd8d029c650116fc85ed6f6b2dd743eb');

  var id1 = serializer.generateId(
    'app@model:foo:', {one: 'one', two: ['two'], three: 'three'});
  var id2 = serializer.generateId(
    'app@model:foo:', {one: 'one', three: 'three', four: ['four']});
  equal(id1, id2);
});
