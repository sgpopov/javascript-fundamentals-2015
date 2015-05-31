var Arr = require('../src/07-arrays.js').Arr;

describe('Arrays', function() {
  'use strict';

  it('should increase array members', function () {
    var res = Arr.increaseArrayMembers();

    expect(res.length).toBe(20);
    expect(res).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40, 45,
      50, 55, 60, 65, 70, 75, 80, 85, 90, 95]);
  });

  it('should compare two char arrays lexicographically', function () {
    var expected = '';
    expect(Arr.lexicographicallyComparison([], [])).toBe('wrong input data');

    expected = 'Position = 0\nBoth chars (\'\') are equal.\n';
    expect(Arr.lexicographicallyComparison([''], [''])).toBe(expected);

    expected = '' +
      'Position = 0\nBoth chars (\'a\') are equal.\n' +
      'Position = 1\nChar \'b\' is smaller than char \'d\'.\n' +
      'Position = 2\nChar \'c\' is bigger than char \'a\'.\n';
    expect(Arr.lexicographicallyComparison(['a', 'b', 'c'], ['a', 'd', 'a'])).toBe(expected);

    expected = '' +
      'Position = 0\nBoth chars (\'a\') are equal.\n' +
      'Position = 1\nChar \'b\' is smaller than char \'d\'.\n' +
      'The second array have more elements.';
    expect(Arr.lexicographicallyComparison(['a', 'b'], ['a', 'd', 'a'])).toBe(expected);

    expected = '' +
      'Position = 0\nBoth chars (\'a\') are equal.\n' +
      'Position = 1\nChar \'b\' is smaller than char \'d\'.\n' +
      'The first array have more elements.';

    expect(Arr.lexicographicallyComparison(['a', 'b', 'c'], ['a', 'd'])).toBe(expected);
  });

  it('should return the maximal sequence of equal elements', function () {
    var res1 = Arr.maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
    var res2 = Arr.maxSequence([5, 5, 5, 5, 5, 5]);

    expect(res1.length).toBe(3);
    expect(res1).toEqual([2, 2, 2]);
    expect(res2.length).toBe(6);
    expect(res2).toEqual([5, 5, 5, 5, 5, 5]);
  });

  it('should return the maximum increasing sequence', function () {
    var res1 = Arr.maxIncreasingSequence([1, 2, 3, 4, 5, 6]);
    var res2 = Arr.maxIncreasingSequence([3, 2, 3, 4, 2, 2, 4]);

    expect(res1.length).toBe(6);
    expect(res1).toEqual([1, 2, 3, 4, 5, 6]);
    expect(res2.length).toBe(3);
    expect(res2).toEqual([2, 3, 4]);
  });

  it('should sort the array using the selection sort', function () {
    var unsorted = [16, 52, 25, 15, 79, 7, 90, 94, 46, 46];
    var sorted = [7, 15, 16, 25, 46, 46, 52, 79, 90, 94];

    expect(Arr.selectionSort(unsorted)).toEqual(sorted);
    expect(Arr.selectionSort(unsorted, true)).toEqual(sorted.reverse());
  });

  it('should find the most frequent number', function () {
    expect(Arr.mostFrequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 4])).toBe('4 (6 times)');
    expect(Arr.mostFrequentNumber([1, 2, 1, 1, 3])).toBe('1 (3 times)');
  });

  it('should return the index of the number using binary search', function () {
    var array = [7, 15, 16, 25, 46, 46, 52, 79, 90, 94];

    expect(Arr.binarySearch(array, 15)).toBe(1);
    expect(Arr.binarySearch(array, 90)).toBe(8);
    expect(Arr.binarySearch(array, 46)).toBe(4);
    expect(Arr.binarySearch(array, 50)).toBe(-1);
  });
});
