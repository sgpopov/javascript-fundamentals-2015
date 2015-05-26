var Loops = require('../src/06-loops.js').Loops;

describe('Loops', function () {
  'use strict';

  it('should print all numbers from 1 to N', function () {
    expect(Loops.printNumbers(0)).toBe('wrong input data');
    expect(Loops.printNumbers(-1)).toBe('wrong input data');
    expect(Loops.printNumbers(1)).toBe('1');
    expect(Loops.printNumbers(20)).toBe('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20');
  });

  it('should return all numbers that are not divisible by 3 and 7', function () {
    expect(Loops.notDivisibleBy3and7(-1)).toBe('wrong input data');
    expect(Loops.notDivisibleBy3and7(0)).toBe('wrong input data');
    expect(Loops.notDivisibleBy3and7(25)).toBe('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 22 23 24 25');
  });

  it('should return min and max numbers correctly', function () {
    var arr1 = [75, 36, 36, 43, 3, 29, 25, 48, 46, 70, 46, 63, 21, 67];
    var arr2 = [50, 92, 36, 11, 50, 73, 31, 42, 24, 80, 10, 97, 29, 29, 69];
    var arr3 = [82, 74, 62, 97, 36, 32, 33, 72, 38, 4, 85, 75, 37, 92, 83, 13];

    expect(Loops.minMax([])).toBeUndefined();
    expect(Loops.minMax(['dada', {}, 'q'])).toBeNull();
    expect(Loops.minMax(['dada', {}, 2, 13, 4, 'q'])).toBe('Min = 2; Max = 13');
    expect(Loops.minMax(arr1)).toBe('Min = 3; Max = 75');
    expect(Loops.minMax(arr2)).toBe('Min = 10; Max = 97');
    expect(Loops.minMax(arr3)).toBe('Min = 4; Max = 97');
  });
});
