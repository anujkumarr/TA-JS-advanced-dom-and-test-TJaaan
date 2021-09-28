const {
  getCircumfrence,
  getArea,
  getFullName,
  palindrome,
} = require('./index');

test('test for full name', () => {
  expect(getFullName('Anuj', 'Kumar')).toBe('Anuj Kumar');
  expect(getFullName('Anuj', 'Kumar')).toBe('Anuj Kumar');
  expect(getFullName('Arya', 'Sam')).toBe('Arya Sam');
  expect(getFullName('Arya', 'Sam')).not.toBe('AryaSam');
  expect(getFullName('Anuj', 'Kumar')).not.toBe('AnujKumar');
  expect(getFullName('Anuj', 'Kumar')).not.toBe('AnujKumar');
});

test('test for circumference of the circle', () => {
  expect(getCircumfrence(2)).toBe(`The circumference is 12.566370614359172`);
  expect(getCircumfrence(3)).toBe(`The circumference is 18.84955592153876`);
  expect(getCircumfrence(4)).toBe(`The circumference is 25.132741228718345`);
  expect(getCircumfrence(7)).not.toBe(`The circumference is 0`);
  expect(getCircumfrence(8)).not.toBe(`The circumference is 19`);
  expect(getCircumfrence(9)).not.toBe(`The circumference is 26`);
});

test('test for area of the circle', () => {
  expect(getArea(2)).toBe(`The area is 12.566370614359172`);
  expect(getArea(3)).toBe(`The area is 28.274333882308138`);
  expect(getArea(4)).toBe(`The area is 50.26548245743669`);
  expect(getArea(7)).not.toBe(`The circumference is 0`);
  expect(getArea(8)).not.toBe(`The circumference is 19`);
  expect(getArea(9)).not.toBe(`The circumference is 26`);
});

test('test for palindome', () => {
  expect(palindrome('mom')).toBe(true);
  expect(palindrome('refer')).toBe(true);
  expect(palindrome('civic')).toBe(true);
  expect(palindrome('hp')).not.toBe(true);
  expect(palindrome('dell')).not.toBe(true);
  expect(palindrome('ladla')).not.toBe(true);
});
