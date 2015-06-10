var regExp = require('../src/12-regular-expressions.js').regExp;

describe('Regular Expression', function () {
  'use strict';

  it('should format the text', function () {
    expect(regExp.format('Hello, there! Are you #{name}?', {name: 'John'})).toBe('Hello, there! Are you John?');
    expect(regExp.format('My name is #{name} and I am #{age}-years-old', {name: 'John', age: 13})).toBe('My name is John and I am 13-years-old');
  });

  it('should bind data', function () {
    var str = '<div data-bind-content="name"></div>';
    var args = {name: 'Steven'};
    var expected = '<div data-bind-content="name">Steven</div>';

    expect(regExp.bind(str, args)).toBe(expected);


    str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></a>';
    args = {name: 'Elena', link: 'http://telerikacademy.com'};
    expected = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</a>';

    expect(regExp.bind(str, args)).toBe(expected);
  });
});
