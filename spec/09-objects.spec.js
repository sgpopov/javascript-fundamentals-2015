var objects = require('../src/09-objects.js').objects;

describe('Objects ', function () {
  'use strict';

  it('should ', function () {
    var p1 = objects.point(1, 3);
    var p2 = objects.point(-2, 2);
    var p3 = objects.point(3, -1);

    expect(Math.floor(objects.calculateDistances(p1, p2))).toBe(3);
    expect(Math.floor(objects.calculateDistances(p2, p3))).toBe(5);
    expect(Math.floor(objects.calculateDistances(p3, p1))).toBe(4);

    var l1 = objects.line(p1, p2);
    var l2 = objects.line(p2, p3);
    var l3 = objects.line(p3, p1);

    expect(objects.isTriangle(l1, l2, l3)).toBeTruthy();
  });

  // it('should remove elements from array', function () {
  //   var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
  //   var expected = [2, 4, 3, 4, 111, 3, 2, '1'];

  //   expect(objects.removeElement(arr, 1)).toEqual(expected);
  // });

  it('should check if object has property', function () {
    expect(objects.hasProperty({length: 1}, 'length')).toBeTruthy();
    expect(objects.hasProperty({size: 1}, 'length')).toBeFalsy();
  });

  it('should print tha names of the youngest person', function () {
    var people = [
      {firstName: 'AA', lastName: 'AA', age: 32},
      {firstName: 'BB', lastName: 'BB', age: 81},
      {firstName: 'CC', lastName: 'CC', age: 19},
      {firstName: 'DD', lastName: 'DD', age: 25},
      {firstName: 'EE', lastName: 'EE', age: 51}
    ];

    expect(objects.youngestPerson(people)).toBe('CC CC');
  });

  it('should group people by given statement', function () {
    objects.People.addPerson('firstName1', 'lastName1', 10);
    objects.People.addPerson('firstName2', 'lastName2', 12);
    objects.People.addPerson('firstName3', 'lastName3', 11);
    objects.People.addPerson('firstName4', 'lastName4', 10);

    expect(objects.People.getPeople()).toEqual([
      {'firstName': 'firstName1', 'lastName': 'lastName1', 'age': 10},
      {'firstName': 'firstName2', 'lastName': 'lastName2', 'age': 12},
      {'firstName': 'firstName3', 'lastName': 'lastName3', 'age': 11},
      {'firstName': 'firstName4', 'lastName': 'lastName4', 'age': 10}
    ]);

    expect(objects.People.group('age')).toEqual({
      10: [
        {'firstName': 'firstName1', 'lastName': 'lastName1', 'age': 10},
        {'firstName': 'firstName4', 'lastName': 'lastName4', 'age': 10}
      ],
      11: [{'firstName': 'firstName3', 'lastName': 'lastName3', 'age': 11}],
      12: [{'firstName': 'firstName2', 'lastName': 'lastName2', 'age': 12}]
    });
  });
});
