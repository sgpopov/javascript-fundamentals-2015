(function (exports) {
  'use strict';

  var funcs = (function () {
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
     * P1: Write a function that returns the last digit of
     * given integer as an English word.
     *
     * @param  {Number} number - Input number.
     * @return {String} - Last digit as a word.
     */
    var lastDigitAsWord = function (number) {
      if (!this.isNumber(number)) {
        return 'wrong input data';
      }

      var numberAsString = '' + number;
      var output = '';

      switch (numberAsString[numberAsString.length - 1]) {
        case '0': output = 'zero'; break;
        case '1': output = 'one'; break;
        case '2': output = 'two'; break;
        case '3': output = 'three'; break;
        case '4': output = 'four'; break;
        case '5': output = 'five'; break;
        case '6': output = 'six'; break;
        case '7': output = 'seven'; break;
        case '8': output = 'eight'; break;
        case '9': output = 'nine'; break;
        default: break;
      }

      return output;
    };


    /**
     * P2: Write a function that reverses the digits of given decimal number.
     *
     * @param  {Number} number - Input number.
     * @return {Number} - Reversed number.
     */
    var reverseNumber = function (number) {
      if (!this.isNumber(number)) {
        return 'wrong input data';
      }

      return (number + '').split('').reverse().join('') * 1;

      /*
      var output = '';
      var numberAsString = '' + number;

      for (var i = numberAsString.length - 1; i >= 0; i -= 1) {
        output += numberAsString[i];
      }

      return output * 1;
      */
    };


    /**
     * P3: Write a function that finds all the occurrences of word in a text.
     *
     * @param  {String} text - Input text.
     * @param  {String} word - The word to search for.
     * @param  {Boolean} caseSensitive - Case sensitive.
     * @return {Number} - Number of occurrences.
     */
    var wordOccurrences = function (text, word, caseSensitive) {
      if (!text || !word) {
        return 'wrong input data';
      }

      var exp = new RegExp('(?:^|\\b)' + word + '(?=\\b|$)',
        'g' + (caseSensitive ? '' : 'i'));
      var result = text.match(exp);

      return result ? result.length : 0;
    };

    /**
     * P4: Write a function to count the number of div elements on the web page
     * @param  {Object} html - Input html.
     * @param  {String} el - The element to search for.
     * @return {Number} - Number of elements.
     */
    var countHtmlElements = function (html, el) {
      return html.getElementsByTagName(el).length;
    };


    /**
     * P5: Write a function that counts how many times given number
     * appears in given array.
     *
     * @param  {Array} array - Given array.
     * @param  {Number} number - Given number.
     * @return {Number} - Number of occurrences.
     */
    var countAppearance = function (array, number) {
      if (!array || array.length < 1 || !this.isNumber(number)) {
        return 'wrong input data';
      }

      var count = 0;

      for (var i = 0; i < array.length; i += 1) {
        count = (array[i] === number) ? count + 1 : count;
      }

      return count;

      /*
      var count = array.filter(function (n) {
        return n === number;
      });

      return count.length;
      */
    };


    /**
     * P6: Write a function that checks if the element at given position in
     * given array of integers is bigger than its
     * two neighbours (when such exist).
     *
     * @param  {Array} array - Given array.
     * @param  {Number} position - Given position.
     * @return {String|Boolean} - The result.
     */
    var largerThanNeighbours = function (array, position) {
      if (array.length <= 2) {
        return 'not enough elements';
      }

      if (position <= 0 || position >= array.length - 1) {
        return 'not enough neighbours';
      }

      if (!this.isNumber(array[position]) ||
        !this.isNumber(array[position - 1]) ||
        !this.isNumber(array[position + 1])) {
        return 'not a valid numbers';
      }

      return (array[position] > array[position - 1]) &&
        (array[position] > array[position + 1]);
    };


    /**
     * P7: Write a function that returns the index of the first element in array
     * that is larger than its neighbours or -1, if there’s no such element.
     *
     * @param  {Array} array - Input array.
     * @return {Number} -
     */
    var firstLargerThanNeighbours = function (array) {
      if (array.length <= 2) {
        return -1;
      }

      for (var i = 1; i < array.length - 1; i += 1) {
        if (this.largerThanNeighbours(array, i) === true) {
          return i;
        }
      }

      return -1;
    };

    return {
      isNumber: isNumber,
      lastDigitAsWord: lastDigitAsWord,
      reverseNumber: reverseNumber,
      wordOccurrences: wordOccurrences,
      countHtmlElements: countHtmlElements,
      countAppearance: countAppearance,
      largerThanNeighbours: largerThanNeighbours,
      firstLargerThanNeighbours: firstLargerThanNeighbours
    };
  }());

  exports.funcs = funcs;

})(typeof exports === 'undefined' ? window : exports);
