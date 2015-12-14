import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('total-results', 'TotalResultsComponent', {
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('when total is 0', function() {
  expect(2);
  var component = this.subject({total: 0});
  equal(component.get('totalText'), 'No');
  equal(component.get('resultText'), 'results');
});

test('when total is 1', function() {
  expect(2);
  var component = this.subject({total: 1});
  equal(component.get('totalText'), '1');
  equal(component.get('resultText'), 'result');
});

test('when total is 2', function() {
  expect(2);
  var component = this.subject({total: 2});
  equal(component.get('totalText'), '2');
  equal(component.get('resultText'), 'results');
});
