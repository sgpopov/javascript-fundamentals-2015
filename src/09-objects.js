(function (exports) {
  'use strict';

  var objects = (function () {

    /* P1: Planar coordinates */
    var point = function (x, y) {
      return {
        x: x,
        y: y
      };
    };

    var line = function (p1, p2) {
      return {
        p1: p1,
        p2: p2
      };
    };

    var calculateDistances = function (p1, p2) {
      return Math.sqrt(
        (p1.x - p2.x) * (p1.x - p2.x) +
        (p1.y - p2.y) * (p1.y - p2.y)
      );
    };

    var isTriangle = function (l1, l2, l3) {
      var a = calculateDistances(l1.p1, l1.p2);
      var b = calculateDistances(l2.p1, l2.p2);
      var c = calculateDistances(l3.p1, l3.p2);

      return ((a + b > c) && (b + c > a) && (c + a > b));
    };


    /**
    * P2: Write a function that removes all elements with a given value.
    *
    * @param  {Array} array - Gicen array.
    * @param  {Mixed} element - Element to be removed.
    * @return {Array} - New array with removed element.
    */

    // Array prototype is read only, properties should not be added.

    /*
    var removeElement = function (array, element) {

      Array.prototype.remove = Array.prototype.remove || function (el) {
        return this.filter(function (current) {
          return current !== el;
        });
      };

      return array.remove(element);
    };
    */


    /**
     * P3: Write a function that makes a deep copy of an object.
     *
     * @param  {Object} obj - Given object.
     * @return {Object} - New object.
     */
    var deepCopy = function (obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      var result = {};

      for (var property in obj) {
        result[property] = this.deepCopy(obj[property]);
      }

      return result;
    };

    /**
     * P4: Write a function that checks if a given object
     * contains a given property.
     *
     * @param  {Object}  obj - Given object
     * @param  {String}  property - Given property
     * @return {Boolean} -
     */
    var hasProperty = function (obj, property) {
      return obj.hasOwnProperty(property);
    };


    /**
     * P5: Write a function that finds the youngest person in a given
     * array of people and prints his/hers full name.
     *
     * @param  {Array} people - Given array of people.
     * @return {String} - Youngest person's first and last name.
     */
    var youngestPerson = function (people) {
      var index = 0;
      var age = people[0].age;

      for (var i = 1; i < people.length; i += 1) {
        if (people[i].age < age) {
          age = people[i].age;
          index = i;
        }
      }

      return people[index].firstName + ' ' + people[index].lastName;

      /*
      var person = people.reduce(function (a, b) {
        return (a.age < b.age) ? a : b;
      });

      return person.firstName + ' ' + person.lastName;
      */
    };

    var People = (function () {
      var self = this;

      self.listOfPeople = [];

      self.addPerson = function (firstName, lastName, age) {
        var person = {
          'firstName': firstName,
          'lastName': lastName,
          'age': age
        };

        self.listOfPeople.push(person);
      };

      self.getPeople = function () {
        return self.listOfPeople;
      };

      self.group = function (property) {
        var result = {};

        for (var person in self.listOfPeople) {
          if (result[self.listOfPeople[person][property]] === undefined ||
            result[self.listOfPeople[person][property]] === null) {
            result[self.listOfPeople[person][property]] = [];
          }

          result[self.listOfPeople[person][property]].push(self.listOfPeople[person]);
        }

        return result;
      };

      return self;
    })();

    return {
      point: point,
      line: line,
      calculateDistances: calculateDistances,
      isTriangle: isTriangle,
      // removeElement: removeElement,
      deepCopy: deepCopy,
      hasProperty: hasProperty,
      youngestPerson: youngestPerson,
      People: People
    };
  }());

  exports.objects = objects;

})(typeof exports === 'undefined' ? window : exports);
