const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  it('returns the correct object for an array with positive numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it('returns the correct object for an array with negative numbers', () => {
    const result = analyzeArray([-5, -2, -8, -1, -4]);
    expect(result).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 5,
    });
  });

  it('returns the correct object for an empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 0,
    });
  });

  it('returns the correct object for an array with a single element', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });
});
