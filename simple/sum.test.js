import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 + 2 to not equal 10', () => {
  expect(sum(3, 2)).not.toEqual(10);
});

test('adds 5 + 1 more then 3 and less then 7', () => {
  expect(sum(5, 1)).toBeGreaterThan(3);
  expect(sum(5, 1)).toBeLessThan(7);
});

test('adds 10 + 11 more or equal then 21 and less or equal then 21', () => {
  expect(sum(10, 11)).toBeGreaterThanOrEqual(21);
  expect(sum(10, 11)).toBeLessThanOrEqual(21);
});

test('adds floats numbers 0.4 + 0.2 equal 0.6', () => {
  expect(sum(0.4, 0.2)).toBeCloseTo(0.6); // используем этот мэтчер так как js округляет дробные числа
});
