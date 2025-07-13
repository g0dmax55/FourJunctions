const {
  calculateDiscount,
  filterProducts,
  sortProducts,
  validateEmail
} = require('./utils');

describe('calculateDiscount', () => {
  test.each([
    [100, 10, 90],
    [200, 50, 100],
    [150, 0, 150]
  ])('returns %i after %i%% discount on %i', (price, discount, expected) => {
    expect(calculateDiscount(price, discount)).toBe(expected);
  });

  test('throws error for negative values or >100% discount', () => {
    expect(() => calculateDiscount(-100, 10)).toThrow();
    expect(() => calculateDiscount(100, -10)).toThrow();
    expect(() => calculateDiscount(100, 150)).toThrow();
  });
});

describe('filterProducts', () => {
  const products = [
    { name: 'Mouse', price: 20 },
    { name: 'Keyboard', price: 50 },
    { name: 'Monitor', price: 200 }
  ];

  test('filters by partial match case-insensitive', () => {
    expect(filterProducts(products, 'mou')).toEqual([{ name: 'Mouse', price: 20 }]);
  });

  test('throws error on invalid input', () => {
    expect(() => filterProducts(null, 'test')).toThrow();
    expect(() => filterProducts(products, 123)).toThrow();
  });
});

describe('sortProducts', () => {
  const products = [
    { name: 'B', price: 10 },
    { name: 'A', price: 20 }
  ];

  test('sorts by name', () => {
    expect(sortProducts([...products], 'name')[0].name).toBe('A');
  });

  test('sorts by price', () => {
    expect(sortProducts([...products], 'price')[0].price).toBe(10);
  });

  test('throws error on invalid key', () => {
    expect(() => sortProducts(products, 'invalid')).toThrow();
  });
});

describe('validateEmail', () => {
  test.each([
    ['test@example.com', true],
    ['hello@domain.co', true],
    ['bademail.com', false],
    ['@missing.com', false],
    ['test@.com', false]
  ])('validates email: %s', (input, expected) => {
    expect(validateEmail(input)).toBe(expected);
  });

  test('throws for non-string input', () => {
    expect(() => validateEmail(123)).toThrow();
  });
});
