(function (exports) {
  'use strict';

  var Arr = (function () {
    /**
     * Checks whenever an input is a number.
     *
     * @param  {Number}  number - Input value.
     * @return {Boolean} - Whenever is a number or not.
     */
    var isNumber = function (number) {
      return !isNaN(number * 1) && isFinite(number);
    };


    /**
     * P1: Write a script that allocates array of 20 integers and initializes
     * each element by its index multiplied by 5.
     *
     * @return {Array} -
     */
    var increaseArrayMembers = function () {
      var output = [];

      // for (var i = 1; i <= 20; i += 1) {
      for (var i = 0; i < 20; i += 1) {
        output.push(i * 5);
      }

      return output;
    };


    /**
     * P2: Write a script that compares two char arrays
     * lexicographically (letter by letter).
     *
     * @param  {Array} arr1 - First char array.
     * @param  {Array} arr2 - Second char array.
     *
     * @return {String} - The result.
     */
    var lexicographicallyComparison = function (arr1, arr2) {
      if (arr1.length < 1 || arr2.length < 1) {
        return 'wrong input data';
      }

      var l1 = arr1.length;
      var l2 = arr2.length;
      var output = '';

      for (var i = 0; i < l1; i += 1) {
        if (arr2[i] === undefined) {
          break;
        }

        output += 'Position = ' + i + '\n';

        if (arr1[i] === arr2[i]) {
          output += 'Both chars (\'' + arr1[i] + '\') are equal.\n';
        }
        else if (arr1[i] > arr2[i]) {
          output += 'Char \'' + arr1[i] + '\' is bigger than char \'' + arr2[i] + '\'.\n';
        }
        else {
          output += 'Char \'' + arr1[i] + '\' is smaller than char \'' + arr2[i] + '\'.\n';
        }
      }

      return l1 < l2 ?
        output + 'The second array have more elements.' : (l1 === l2) ?
          output : output + 'The first array have more elements.';
    };


    /**
     * P3: Write a script that finds the maximal sequence of
     * equal elements in an array.
     *
     * @param  {Array} inputArray - Input array.
     * @return {Array} - Maximal sequence of equal elements
     */
    var maxSequence = function (inputArray) {
      var currentLength = 1;
      var maxLength = 1;
      var index = 0;

      for (var i = 0; i < inputArray.length - 1; i += 1) {
        if (inputArray[i] === inputArray[i + 1]) {
          currentLength += 1;
        }
        else {
          if (currentLength > maxLength) {
            maxLength = currentLength;
            index = i - currentLength + 1;
          }

          currentLength = 1;
        }
      }

      maxLength = (currentLength > maxLength) ? currentLength : maxLength;

      return inputArray.slice(index, index + maxLength);
    };


    /**
     * P4: Write a script that finds the maximal increasing sequence in an array.
     *
     * @param  {Array} inputArray - Input array.
     * @return {Array} - Maximal increasing sequence.
     */
    var maxIncreasingSequence = function (inputArray) {
      var currentLength = 1;
      var maxLength = 1;
      var index = 0;

      for (var i = 0; i < inputArray.length - 1; i += 1) {
        if (inputArray[i] < inputArray[i + 1]) {
          currentLength += 1;
        }
        else {
          if (currentLength > maxLength) {
            maxLength = currentLength;
            index = i - currentLength + 1;
          }

          currentLength = 1;
        }
      }

      maxLength = (currentLength > maxLength) ? currentLength : maxLength;

      return inputArray.slice(index, index + maxLength);
    };


    /**
     * P5: Selection Sort.
     *
     * @param  {Array} array - Input array.
     * @param  {Boolean} reverse - Whenever the sort order should be ASC or DESC.
     * @return {Array} - Sorted array
     */
    var selectionSort = function (array, reverse) {
      function compare(a, b, rev) {
        return rev ? (a - b) < 0 : (a - b) > 0;
      }

      if (array.length <= 1) {
        return array;
      }

      var min;
      var index;
      var temp;

      for (var i = 0; i < array.length; i += 1) {
        index = i;
        min = array[i];

        for (var j = i + 1; j < array.length; j += 1) {
          if (compare(min, array[j], reverse)) {
            min = array[j];
            index = j;
          }
        }

        temp = array[i];
        array[i] = min;
        array[index] = temp;
      }

      return array;
    };


    /**
     * P6: Write a script that finds the most frequent number in an array.
     *
     * @param  {Array} array - Input array.
     * @return {String} -
     */
    var mostFrequentNumber = function (array) {
      if (array.length < 1) {
        return null;
      }

      var maxElement = array[0];
      var maxCount = 1;
      var numbers = [];

      for (var i = 0; i < array.length; i += 1) {
        var current = array[i];

        if (numbers[current] === undefined) {
          numbers[current] = 1;
        }
        else {
          numbers[current] += 1;
        }

        if (numbers[current] > maxCount) {
          maxElement = current;
          maxCount = numbers[current];
        }
      }

      return maxElement + ' (' + maxCount + ' times)';
    };


    /**
     * P7: Write a script that finds the index of given element in a sorted
     * array of integers by using the binary search algorithm.
     *
     * @param  {Array} array - Input array.
     * @param  {Number} searchEl - The number to search for.
     * @return {Number} - The index of the element.
     */
    var binarySearch = function (array, searchEl) {
      var left = 0;
      var right = array.length - 1;
      var middle;

      while (left <= right) {
        middle = (left + right) / 2 | 0;
        // middle = left + Math.floor((right - left) / 2);

        if (array[middle] < searchEl) {
          left = middle + 1;
        }
        else if (array[middle] > searchEl) {
          right = middle - 1;
        }
        else {
          return middle;
        }
      }

      return -1;
    };

    return {
      isNumber: isNumber,
      increaseArrayMembers: increaseArrayMembers,
      lexicographicallyComparison: lexicographicallyComparison,
      maxSequence: maxSequence,
      maxIncreasingSequence: maxIncreasingSequence,
      selectionSort: selectionSort,
      mostFrequentNumber: mostFrequentNumber,
      binarySearch: binarySearch
    };
  }());

  exports.Arr = Arr;

})(typeof exports === 'undefined' ? window : exports);
