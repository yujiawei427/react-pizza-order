import sum from './sum';
//TDD Test Driven development

describe('sum', () => {
  it('should sum up two numbers', () => {
    // assertion
    expect(sum(1, 2)).toBe(3);
  });

  test('should sum up two numbers with negative vale', () => {
    expect(sum(1, -1)).toBe(0);
  });

  it('should sum as many args as possible', () => {
    const result = sum(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    expect(result).toBe(55);
  })
});