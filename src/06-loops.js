(function (exports) {
  'use strict';

  var Loops = (function () {
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
     * P1: Write a script that prints all the numbers from 1 to N.
     *
     * @param  {Number} number - Input number.
     * @return {String} - String that contains all numbers.
     */
    var printNumbers = function (number) {
      if (!this.isNumber(number) || number < 1) {
        return 'wrong input data';
      }

      var output = '';

      for (var i = 1; i <= number; i += 1) {
        output += ' ' + i;
      }

      return output.trim();
    };


    /**
     * P2: Write a script that prints all the numbers from 1 to N,
     * that are not divisible by 3 and 7 at the same time.
     *
     * @param  {Number} number - Input number.
     * @return {String} - String that contains all numbers.
     */
    var notDivisibleBy3and7 = function (number) {
      if (!this.isNumber(number) || number < 1) {
        return 'wrong input data';
      }

      var output = '';

      for (var i = 1; i <= number; i += 1) {
        // if (i % 21 === 0) {
        if ((i % 3 === 0) && (i % 7 === 0)) {
          continue;
        }

        output += ' ' + i;
      }

      return output.trim();
    };

    /**
     * P3: Write a script that finds the max and min number
     * from a sequence of numbers.
     *
     * @param  {Array} numbers - Input numbers
     * @return {String} - String that contains the min and max numbers.
     */
    var minMax = function (numbers) {
      if (numbers.length < 1) {
        return;
      }

      var min;
      var max;

      for (var i = 0; i < numbers.length; i += 1) {
        if (!this.isNumber(numbers[i])) {
          continue;
        }

        if (!this.isNumber(min)) {
          min = max = numbers[i];
        }
        else {
          min = (numbers[i] < min) ? numbers[i] : min;
          max = (numbers[i] > max) ? numbers[i] : max;
        }
      }

      return !this.isNumber(min) ? null : 'Min = ' + min + '; Max = ' + max;
    };

    return {
      isNumber: isNumber,
      printNumbers: printNumbers,
      notDivisibleBy3and7: notDivisibleBy3and7,
      minMax: minMax
    };
  }());

  exports.Loops = Loops;

})(typeof exports === 'undefined' ? window : exports);
