const {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
} = require('./calculator');

test('add 1 and 2 is equal to 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 2 - 5 is equal to -3', () => {
  expect(subtract(2, 5)).toBe(-3);
});

test('sum 10 + 100 is not equal to 30', () => {
  expect(sum(10, 100)).not.toBe(42);
});

test('multiply 5 * 3 is equal to 15', () => {
  expect(multiply(3, 5)).toBe(15);
});

test('power 5 is equal to 25', () => {
  expect(power(5)).toBe(25);
});

test('factorial 2*3*4*5 is not equal to 100', () => {
  expect(factorial(2, 3, 4, 5)).not.toBe(100);
});
