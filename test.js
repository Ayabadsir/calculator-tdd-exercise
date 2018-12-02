const operations = require('./operations.js');
const assert = require('assert');

it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.additioner(1, 3), 4);
});

it('correctly calculates the difference of 33 and 3', () => {
    assert.equal(operations.soustraire(33, 3), 30);
});

it('correctly calculates the Multiplication of 2 and 1', () => {
  assert.equal(operations.multiplier(2,1), 2);
});

it('correctly calculates the Division of 5 and 1', () => {
  assert.equal(operations.diviser(5,1), 5);
});

it('correctly, one of two values is not a number', () => {
  assert.equal(operations.verifier1("ok",5), true);
});

it('correctly, the two values are not numbers', () => {
  assert.equal(operations.verifier2("ok","ok"), true );
});
