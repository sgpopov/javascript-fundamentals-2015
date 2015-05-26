var CS = require('../src/05-conditional-statements.js').CS;

describe('Conditional Statements', function () {
  'use strict';

  it('should swap the numbers if the first is greater', function () {
    expect(CS.swap(5, 2)).toBe('2 5');
    expect(CS.swap(3, 4)).toBe('3 4');
    expect(CS.swap(5.5, 4.5)).toBe('4.5 5.5');
  });

  it('should return the multiplication correctly', function () {
    expect(CS.multiplicationSign(5, 2, 2)).toBe('+');
    expect(CS.multiplicationSign(-2, -2, 1)).toBe('+');
    expect(CS.multiplicationSign(-2, 4, 3)).toBe('-');
    expect(CS.multiplicationSign(0, -2.5, 4)).toBe(0);
    expect(CS.multiplicationSign(-1, -0.5, -5.1)).toBe('-');
  });

  it('should return the biggest number among three given', function () {
    expect(CS.biggestOfThree(5, 2, 2)).toBe(5);
    expect(CS.biggestOfThree(-2, -2, 1)).toBe(1);
    expect(CS.biggestOfThree(-2, 4, 3)).toBe(4);
    expect(CS.biggestOfThree(0, -2.5, 5)).toBe(5);
    expect(CS.biggestOfThree(-0.1, -0.5, -1.1)).toBe(-0.1);
  });

  it('should sort the given numbers', function () {
    expect(CS.sortNumbers(5, 1, 2)).toBe('5 2 1');
    expect(CS.sortNumbers(-2, -2, 1)).toBe('1 -2 -2');
    expect(CS.sortNumbers(-2, 4, 3)).toBe('4 3 -2');
    expect(CS.sortNumbers(0, -2.5, 5)).toBe('5 0 -2.5');
    expect(CS.sortNumbers(-1.1, -0.5, -0.1)).toBe('-0.1 -0.5 -1.1');
    expect(CS.sortNumbers(10, 20, 30)).toBe('30 20 10');
    expect(CS.sortNumbers(1, 1, 1)).toBe('1 1 1');
  });

  it('should display the digit as word', function() {
    var words = ['zero', 'one', 'two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine'];

    expect(CS.digitAsWord(-1)).toBe('not a digit');
    expect(CS.digitAsWord(10)).toBe('not a digit');
    expect(CS.digitAsWord('dadada')).toBe('not a digit');

    for (var i = 0; i < 10; i += 1) {
      expect(CS.digitAsWord(i)).toBe(words[i]);
    }
  });

  it('should calculates the roots of quadratic equation', function () {
    expect(CS.quadraticEquationRoots(2, 5, -3)).toBe('x1=-3; x2=0.5');
    expect(CS.quadraticEquationRoots(-1, 3, 0)).toBe('x1=3; x2=0');
    expect(CS.quadraticEquationRoots(-0.5, 4, -8)).toBe('x1=x2=4');
    expect(CS.quadraticEquationRoots(5, 2, 8)).toBe('no real roots');
  });

  it('should find the biggest number among five given', function () {
    expect(CS.biggestOfFive(5, 2, 2, 4, 1)).toBe(5);
    expect(CS.biggestOfFive(-2, -22, 1, 0, 0)).toBe(1);
    expect(CS.biggestOfFive(-2, 4, 3, 2, 0)).toBe(4);
    expect(CS.biggestOfFive(0, -2.5, 3, 2, 5)).toBe(5);
    expect(CS.biggestOfFive(-3, -0.5, -1.1, -2, -0.1)).toBe(-0.1);
  });

  it('should return the number as a word', function () {
    var test = [
      {'number': 0, 'text': 'Zero'},
      {'number': 9, 'text': 'Nine'},
      {'number': 10, 'text': 'Ten'},
      {'number': 12, 'text': 'Twelve'},
      {'number': 19, 'text': 'Nineteen'},
      {'number': 25, 'text': 'Twenty five'},
      {'number': 98, 'text': 'Ninety eight'},
      {'number': 98, 'text': 'Ninety eight'},
      {'number': 273, 'text': 'Two hundred and seventy three'},
      {'number': 400, 'text': 'Four hundred'},
      {'number': 501, 'text': 'Five hundred and one'},
      {'number': 617, 'text': 'Six hundred and seventeen'},
      {'number': 711, 'text': 'Seven hundred and eleven'},
      {'number': 999, 'text': 'Nine hundred and ninety nine'}
    ];

    for (var obj in test) {
      var n = test[obj];

      expect(CS.numberAsWord(n.number)).toBe(n.text);
    }
  });
});
