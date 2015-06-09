var People = require('../src/10-array-methods.js').People;

describe('Array Methods', function() {
  'use strict';

  var data = [
    ['Curry', 'Schneider', 37, false],
    ['Humphrey', 'Christian', 18, false],
    ['Claudine', 'Holland', 49, true],
    ['Flossie', 'Mckenzie', 31, false],
    ['England', 'Hall', 10, false],
    ['Bernard', 'Conley', 15, true],
    ['Polly', 'Rivera', 44, true],
    ['Marva', 'Kline', 19, true]
  ];

  for (var i = 0; i < data.length; i += 1) {
    People.createPerson(
      data[i][0],
      data[i][1],
      data[i][2],
      data[i][3]
    );
  }

  it('should check if all people are adults', function () {
    expect(People.isAllAdults()).toBeFalsy();
  });

  it('should return all underage people', function () {
    var expected = [
      {'firstName': 'England', 'lastName': 'Hall', 'age': 10, 'gender': false},
      {'firstName': 'Bernard', 'lastName': 'Conley', 'age': 15, 'gender': true}
    ];

    expect(People.underage()).toEqual(expected);
  });

  it('should calculate the average age of all women', function () {
    var expected = (49 + 15 + 44 + 19) / 4;

    expect(People.averageAgeOfAllWomen()).toBe(expected);
  });

  it('should find the youngest male person', function () {
    expect(People.youngest()).toBe('England Hall');
  });

  it('should group people by their name\'s first letter', function () {
    var expected = {
      'E': [
        {'firstName': 'England', 'lastName': 'Hall', 'age': 10, 'gender': false}
      ],
      'B': [
        {'firstName': 'Bernard', 'lastName': 'Conley', 'age': 15, 'gender': true}
      ],
      'H': [
        {'firstName': 'Humphrey', 'lastName': 'Christian', 'age': 18, 'gender': false}
      ],
      'M': [
        {'firstName': 'Marva', 'lastName': 'Kline', 'age': 19, 'gender': true}
      ],
      'F': [
        {'firstName': 'Flossie', 'lastName': 'Mckenzie', 'age': 31, 'gender': false}
      ],
      'C': [
        {'firstName': 'Curry', 'lastName': 'Schneider', 'age': 37, 'gender': false},
        {'firstName': 'Claudine', 'lastName': 'Holland', 'age': 49, 'gender': true}
      ],
      'P': [
        {'firstName': 'Polly', 'lastName': 'Rivera', 'age': 44, 'gender': true}
      ]
    };

    expect(People.groupByFirstLetter()).toEqual(expected);
  });
});
