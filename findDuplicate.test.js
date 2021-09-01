const { findDuplicates } = require('./findDuplicates.js');

describe('findDuplicates', () => {
  it('returns an array', () => {
    // arrange
    const input = [];
    // act
    const result = findDuplicates(input);
    // assert
    expect(Array.isArray(result)).toBe(true);
  });
  it('returns duplicates in an array', () => {
    const input = [1, 2, 2, 3, 4, 5, 5, 5, 7, 9, 10, 10];

    throw 'Not Implemented';
  });
});