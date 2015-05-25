(function (exports) {
  'use strict';

  var OE = (function () {
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
     * P1: Expression that checks if given integer is odd or even.
     *
     * @param  {Number} number - Given number
     * @return {Boolean} - The result.
     */
    var isOdd = function (number) {
      return this.isNumber(number) && (number % 2 !== 0);
    };

    /**
     * P2: Checks if given number can be divided (without remainder)
     * by 7 and 5 in the same time.
     *
     * @param  {Number}  number - Given number
     * @return {Boolean} - The result.
     */
    var isDivisible = function (number) {
      return this.isNumber(number) && (number % 5 === 0) && (number % 7 === 0);
    };

    /**
     * P3: Calculates rectangle’s area by given width and height.
     *
     * @param  {Number} width  - Rectangle’s width
     * @param  {Number} height - Rectangle’s height
     * @return {Number}  - Rectangle’s area
     */
    var rectArea = function (width, height) {
      return (this.isNumber(width) && this.isNumber(height)) ?
        width * height : -1;
    };

    /**
     * P4: Checks for given integer if its third digit (right-to-left) is 7.
     *
     * @param  {Number}  number - Given number.
     * @return {Boolean} - The result.
     */
    var isSeven = function (number) {
      var len = String(number).length;

      return this.isNumber(number) && (len > 2) &&
        (String(number).substr(len - 3, 1) === '7');
    };

    /**
     * P5: Boolean expression for finding if the bit #3 (counting from 0)
     * of a given integer.
     *
     * @param  {Number} number - Given number.
     * @return {Number} - The result.
     */
    var thirdBit = function (number) {
      return this.isNumber(number) ? ((number >> 3) & 1) : -1;
    };

    /**
     * P6: Checks if given point P(x, y) is within a
     * circle K({0,0}, 5). -> {0,0} is the centre and 5 is the radius.
     *
     * @param  {Number} x -
     * @param  {Number} y -
     * @param  {Object} circle -
     * @return {Boolean} - The result.
     */
    var isPointInCircle = function (x, y, circle) {
      if (!this.isNumber(x) || !this.isNumber(y)) {
        return false;
      }

      var point = {
        x: x,
        y: y
      };

      circle = circle || {
        center: {
          x: 0,
          y: 0
        },
        radius: 5
      };

      var dX = (point.x - circle.center.x) * (point.x - circle.center.x);
      var dY = (point.y - circle.center.y) * (point.y - circle.center.y);

      return ((dX + dY) <= (circle.radius * circle.radius));
    };

    /**
     * P7: Check whenever a given number is prime or not.
     * @param {Number} number  - Given number
     * @return {Boolean} - Is it prime?
     */
    var isPrime = function (number) {
      if (!this.isNumber(number)) {
        return false;
      }

      // 1 is not a prime
      if (number === 1) {
        return false;
      }

      // 2 and 3 are primes
      if (number < 4) {
        return true;
      }

      // All primes except 2 are odd.
      if (number % 2 === 0) {
        return false;
      }

      // We have excluded 4, 6, 8.
      // 5 and 7 are primes
      if (number < 9) {
        return true;
      }

      if (number % 3 === 0) {
        return false;
      }

      // 'number' rounded to the greatest integer 'r', so that
      // r * r <= number
      var r = Math.floor(Math.sqrt(number));
      var f = 5;
      while (f <= r) {
        if (number % f === 0) {
          return false;
        }

        if (number % (f + 2) === 0) {
          return false;
        }

        f += 6;
      }

      return true;
    };

    /**
     * Calculates trapezoid's area by given sides a and b and height h.
     *
     * @param  {Number} a - Base
     * @param  {Number} b - Base
     * @param  {Number} h - Height
     * @return {Number}- Trapezoid's area.
     */
    var trapezoidArea = function (a, b, h) {
      return this.isNumber(a) && this.isNumber(b) && this.isNumber(h) ?
        (((a + b) / 2) * h) : -1;
    };

    /**
     * Checks if given point P(x, y) is within the circle K( (1, 1), 3) and
     * out of the rectangle R(top = 1, left = -1, width = 6, height = 2).
     *
     * @param  {Number}  x -
     * @param  {Number}  y -
     * @return {Boolean} -
     */
    var isInTheCircleAndOutsideTheRect = function (x, y) {
      if (!this.isNumber(x) && !this.isNumber(y)) {
        return false;
      }

      var point = {
        x: x,
        y: y
      };

      var circle = {
        center: {
          x: 1,
          y: 1
        },
        radius: 3
      };

      var rectangle = {
        top: 1,
        left: -1,
        width: 6,
        height: 2
      };

      var isOutsideRectangle =
        (point.x < rectangle.left) ||
        (point.x > (rectangle.left + rectangle.width)) ||
        (point.y > rectangle.top) ||
        (point.y < (rectangle.top - rectangle.height));

      return this.isPointInCircle(point.x, point.y, circle) && isOutsideRectangle;
    };

    return {
      isNumber: isNumber,
      isOdd: isOdd,
      isDivisible: isDivisible,
      rectArea: rectArea,
      isSeven: isSeven,
      thirdBit: thirdBit,
      isPointInCircle: isPointInCircle,
      isPrime: isPrime,
      trapezoidArea: trapezoidArea,
      isInTheCircleAndOutsideTheRect: isInTheCircleAndOutsideTheRect
    };
  }());

  exports.OE = OE;

})(typeof exports === 'undefined' ? window : exports);
