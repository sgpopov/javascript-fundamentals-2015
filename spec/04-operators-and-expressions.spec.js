var OE = require('../src/04-operators-and-expressions.js').OE;

describe('Operators and Expressions', function () {
  'use strict';

  it('should determine whenever the number is odd or even', function () {
    expect(OE.isOdd(3)).toBeTruthy();
    expect(OE.isOdd(2)).toBeFalsy();
    expect(OE.isOdd(-2)).toBeFalsy();
    expect(OE.isOdd(0)).toBeFalsy();
    expect(OE.isOdd(-1)).toBeTruthy();
    expect(OE.isOdd(-3)).toBeTruthy();

    expect(OE.isOdd('qwerty')).toBeFalsy();
  });

  it('should check if number is divisible by 5 and 7', function () {
    expect(OE.isDivisible(3)).toBeFalsy();
    expect(OE.isDivisible(0)).toBeTruthy();
    expect(OE.isDivisible(5)).toBeFalsy();
    expect(OE.isDivisible(7)).toBeFalsy();
    expect(OE.isDivisible(35)).toBeTruthy();
    expect(OE.isDivisible(140)).toBeTruthy();

    expect(OE.isDivisible('qwerty')).toBeFalsy();
  });

  it('should calculates rectangles area by given width and height.', function () {
    expect(OE.rectArea(3, 4)).toBe(12);
    expect(OE.rectArea(2.5, 3)).toBe(7.5);
    expect(OE.rectArea(5, 5)).toBe(25);

    expect(OE.rectArea('qwerty', 2)).toBe(-1);
  });

  it('should check if the third digit is 7', function () {
    expect(OE.isSeven(5)).toBeFalsy();
    expect(OE.isSeven(701)).toBeTruthy();
    expect(OE.isSeven(1732)).toBeTruthy();
    expect(OE.isSeven(9703)).toBeTruthy();
    expect(OE.isSeven(877)).toBeFalsy();
    expect(OE.isSeven(777877)).toBeFalsy();
    expect(OE.isSeven(9999799)).toBeTruthy();
  });

  it('should check if the third digit is 7', function () {
    expect(OE.thirdBit(5)).toBe(0);
    expect(OE.thirdBit(8)).toBe(1);
    expect(OE.thirdBit(0)).toBe(0);
    expect(OE.thirdBit(15)).toBe(1);
    expect(OE.thirdBit(5343)).toBe(1);
    expect(OE.thirdBit(62241)).toBe(0);
  });

  it('should check if point is in the circle', function () {
    expect(OE.isPointInCircle(0, 1)).toBeTruthy();
    expect(OE.isPointInCircle(-5, 0)).toBeTruthy();
    expect(OE.isPointInCircle(-4, 5)).toBeFalsy();
    expect(OE.isPointInCircle(1.5, -3)).toBeTruthy();
    expect(OE.isPointInCircle(-4, -3.5)).toBeFalsy();
    expect(OE.isPointInCircle(100, -30)).toBeFalsy();
    expect(OE.isPointInCircle(0, 0)).toBeTruthy();
    expect(OE.isPointInCircle(0.2, -0.8)).toBeTruthy();
    expect(OE.isPointInCircle(0.9, -4.93)).toBeFalsy();
    expect(OE.isPointInCircle(2, 2.655)).toBeTruthy();
  });

  it('should check if number is prime', function () {
    var i;
    // list of all composite numbers between 2 and 100
    var notPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22,
      24, 25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44,
      45, 46, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 60, 62, 63, 64,
      65, 66, 68, 69, 70, 72, 74, 75, 76, 77, 78, 80, 81, 82, 84, 85,
      86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100];

    // list of all prime numbers between 1 and 200
    var primesArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
      53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131,
      137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

    expect(OE.isPrime(1)).toBeFalsy();

    for (i = notPrimes.length - 1; i >= 0; i -= 1) {
      expect(OE.isPrime(notPrimes[i])).toBeFalsy();
    }

    for (i = primesArray.length - 1; i >= 0; i -= 1) {
      expect(OE.isPrime(primesArray[i])).toBeTruthy();
    }
  });

  it('should calculates the trapezoid area correctly', function () {
    expect(OE.trapezoidArea(5, 7, 12)).toBe(72);
    expect(OE.trapezoidArea(2, 1, 33)).toBe(49.5);
    expect(OE.trapezoidArea(8.5, 4.3, 2.7)).toBe(17.28);
    expect(OE.trapezoidArea(100, 200, 300)).toBe(45000);
  });

  it('should check if point is in the circle and outside the rectangle', function () {
    expect(OE.isInTheCircleAndOutsideTheRect(1, 2)).toBeTruthy();
    expect(OE.isInTheCircleAndOutsideTheRect(2.5, 2)).toBeTruthy();
    expect(OE.isInTheCircleAndOutsideTheRect(0, 1)).toBeFalsy();
    expect(OE.isInTheCircleAndOutsideTheRect(2.5, 1)).toBeFalsy();
    expect(OE.isInTheCircleAndOutsideTheRect(2, 0)).toBeFalsy();
    expect(OE.isInTheCircleAndOutsideTheRect(4, 0)).toBeFalsy();
    expect(OE.isInTheCircleAndOutsideTheRect(2.5, 1.5)).toBeTruthy();
    expect(OE.isInTheCircleAndOutsideTheRect(2, 1.5)).toBeTruthy();
    expect(OE.isInTheCircleAndOutsideTheRect(1, 2.5)).toBeTruthy();
    expect(OE.isInTheCircleAndOutsideTheRect(-100, -100)).toBeFalsy();
  });
});
