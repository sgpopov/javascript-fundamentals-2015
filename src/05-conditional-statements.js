(function (exports) {
  'use strict';

  var CS = (function () {
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
     * P1: Write an if statement that takes two double variables a and b and
     * exchanges their values if the first one is greater than the second.
     *
     * @param  {Number}  a - First number.
     * @param  {Number}  b - Second number.
     *
     * @return {String} - The result.
     */
    var swap = function (a, b) {
      if (!this.isNumber(a) || !this.isNumber(b)) {
        return 'wrong input data';
      }

      if (a > b) {
        var tmp = a;
        a = b;
        b = tmp;
      }

      return a + ' ' + b;
    };


    /**
     * P2: Write a script that shows the sign (+, - or 0) of the product of
     * three real numbers, without calculating it.
     *
     * @param  {Number} a - First number.
     * @param  {Number} b - Second number.
     * @param  {Number} c - Third number.
     * @return {String|Number} - Sign.
     */
    var multiplicationSign = function (a, b, c) {
      if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
        return 'wrong input data';
      }

      if (a === 0 || b === 0 || c === 0) {
        return 0;
      }

      var negativeNumbers = 0;

      if (a < 0) {
        negativeNumbers += 1;
      }

      if (b < 0) {
        negativeNumbers += 1;
      }

      if (c < 0) {
        negativeNumbers += 1;
      }

      return (negativeNumbers === 1 || negativeNumbers === 3) ? '-' : '+';
    };


    /**
     * P3: Finds the biggest of three numbers.
     *
     * @param  {Number} a - First number.
     * @param  {Number} b - Second number.
     * @param  {Number} c - Third number.
     * @return {Number} - Biggest number.
     */
    var biggestOfThree = function (a, b, c) {
      if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
        return 'wrong input data';
      }

      if (a >= b && a >= c) {
        return a;
      }
      else if (b >= a && b >= c) {
        return b;
      }
      else {
        return c;
      }
    };


    /**
     * P4: Sort 3 real values in descending order.
     *
     * @param  {Numbers} a - First number.
     * @param  {Numbers} b - Second number.
     * @param  {Numbers} c - Third number.
     * @return {String} - Sorted numbers.
     */
    var sortNumbers = function (a, b, c) {
      if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
        return 'wrong input data';
      }

      if (a > b && a > c) {
        return (b > c) ? (a + ' ' + b + ' ' + c) : (a + ' ' + c + ' ' + b);
      }
      else if (b > c) {
        return (a > c) ? (b + ' ' + a + ' ' + c) : (b + ' ' + c + ' ' + a);
      }
      else {
        return (a > b) ? (c + ' ' + a + ' ' + b) : (c + ' ' + b + ' ' + a);
      }
    };


    /**
     * P5: Write a script that asks for a digit (0-9), and depending on the input,
     * shows the digit as a word (in English).
     *
     * @param  {Number} digit - Given digit.
     * @return {String} - Error message or the given digit as a word.
     */
    var digitAsWord = function (digit) {
      if (!this.isNumber(digit) || digit < 0 || digit > 9) {
        return 'not a digit';
      }

      var output = '';

      switch (digit) {
        case 0: output = 'zero'; break;
        case 1: output = 'one'; break;
        case 2: output = 'two'; break;
        case 3: output = 'three'; break;
        case 4: output = 'four'; break;
        case 5: output = 'five'; break;
        case 6: output = 'six'; break;
        case 7: output = 'seven'; break;
        case 8: output = 'eight'; break;
        case 9: output = 'nine'; break;
        default: break;
      }

      return output;
    };


    /**
     * P6: Write a script that reads the coefficients a, b and c of a quadratic
     * equation ax2 + bx + c = 0 and solves it (prints its real roots).
     * Calculates and prints its real roots.
     *
     * @param  {Numbers} a - coefficient A
     * @param  {Numbers} b - coefficient B
     * @param  {Numbers} c - coefficient C
     * @return {String} - Roots.
     */
    var quadraticEquationRoots = function(a, b, c) {
      if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c)) {
        return 'wrong input coefficients';
      }

      if (a === 0) {
        return 'not a quadratic equation';
      }

      var discriminant = (b * b) - (4 * a * c);

      if (discriminant < 0) {
        return 'no real roots';
      }

      var x1 = (-b - Math.sqrt(discriminant)) / (2 * a);
      var x2 = (-b + Math.sqrt(discriminant)) / (2 * a);

      if (x1 === x2) {
        return 'x1=x2=' + x1;
      }
      else {
        return 'x1=' + x1 + '; x2=' + x2;
      }
    };


    /**
     * Write a script that finds the greatest of given 5 variables.
     *
     * @param  {Number} a - First number.
     * @param  {Number} b - Second number.
     * @param  {Number} c - Third number.
     * @param  {Number} d - Fourth number.
     * @param  {Number} e - Fifth number.
     * @return {Number}  - Biggest number.
     */
    var biggestOfFive = function (a, b, c, d, e) {
      if (!this.isNumber(a) || !this.isNumber(b) || !this.isNumber(c) ||
        !this.isNumber(d) || !this.isNumber(e)) {
        return 'wrong input data';
      }

      var max = a;
      max = (b > max) ? b : max;
      max = (c > max) ? c : max;
      max = (d > max) ? d : max;
      max = (e > max) ? e : max;

      return max;

      // if (a >= b && a >= c && a >= d && a >= e) {
      //   return a;
      // }
      // else if (b >= a && b >= c && b >= d && b >= e) {
      //   return b;
      // }
      // else if (c >= a && c >= b && c >= d && c >= e) {
      //   return c;
      // }
      // else if (d >= a && d >= b && d >= c && d >= e) {
      //   return d;
      // }
      // else {
      //   return e;
      // }
    };


    /**
     * Write a script that converts a number in the range [0..999] to words,
     * corresponding to its English pronunciation.
     *
     * @param  {Number} number - Given number.
     * @return {String} - Number as word(s).
     */
    var numberAsWord = function (number) {
      if (!this.isNumber(number) || number < 0 || number > 999) {
        return 'not a (valid) number';
      }

      if (number === 0) {
        return 'Zero';
      }

      var output = '';

      var oneToTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
      'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      var wordsTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
       'eighty', 'ninety'];


      if (number < 20) {
        output = oneToTwenty[number];

        return output[0].toUpperCase() + output.slice(1);
      }

      if (Math.floor(number / 100) > 0) {
        output += oneToTwenty[Math.floor(number / 100)];
        output = output[0].toUpperCase() + output.slice(1) + ' hundred';
      }

      if (number % 100 !== 0 && number / 100 !== 0 && number > 100) {
        output += ' and ';
      }

      number %= 100;
      var tens = Math.floor(number / 10);
      var ones = Math.floor(number % 10);

      if (tens > 0 || ones > 0) {
        if (tens < 2) {
          output += oneToTwenty[tens * 10 + ones];
        }
        else {
          output += wordsTens[tens];
          if (ones > 0) {
            output += ' ' + oneToTwenty[ones];
          }
        }
      }

      output = output[0].toUpperCase() + output.slice(1);

      return output;
    };


    return {
      isNumber: isNumber,
      swap: swap,
      multiplicationSign: multiplicationSign,
      biggestOfThree: biggestOfThree,
      sortNumbers: sortNumbers,
      digitAsWord: digitAsWord,
      quadraticEquationRoots: quadraticEquationRoots,
      biggestOfFive: biggestOfFive,
      numberAsWord: numberAsWord
    };
  }());

  exports.CS = CS;

})(typeof exports === 'undefined' ? window : exports);
