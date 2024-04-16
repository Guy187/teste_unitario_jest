const { sum, subtract, multiply, divide } = require('./calculadora');

test('somar 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subitrair 3 - 1 to equal 2', () => {
  expect(subtract(3, 1)).toBe(2);
});

test('multiplicar 2 * 4 to equal 8', () => {
  expect(multiply(2, 4)).toBe(8);
});

test('dividir 6 / 2 to equal 3', () => {
  expect(divide(6, 2)).toBe(3);
});
