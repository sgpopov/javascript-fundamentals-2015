(function (exports) {
  'use strict';

  var People = (function () {
    var self = this;

    self.list = []; // List of all people.

    /**
     * P1: Make person
     *
     * @param  {String} firstName -
     * @param  {String} lastName -
     * @param  {Number} age -
     * @param  {Boolean} gender - true is female, false is male.
     */
    self.createPerson = function (firstName, lastName, age, gender) {
      var person = {
        'firstName': firstName,
        'lastName': lastName,
        'age': age,
        'gender': gender
      };

      self.list.push(person);
    };


    self.getAll = function () {
      return self.list;
    };


    /**
     * P2: People of age
     * Write a function that checks if an array of person contains only
     * people of age (with age 18 or greater).
     *
     * @return {Boolean} - Whenever all people are adults.
     */
    self.isAllAdults = function () {
      return self.list.every(function (person) {
        return person.age >= 18;
      });
    };


    /**
     * P3: Underage people
     * Write a function that prints all underaged persons of an array of person.
     *
     * @return {Array} - List of all underage people.
     */
    self.underage = function () {
      var listOfUnderagePeople = self.list.filter(function (person) {
        return person.age < 18;
      });

      // listOfUnderagePeople.forEach(function (person) {
      //   console.log(JSON.stringify(person));
      // });

      return listOfUnderagePeople;
    };


    /**
     * P4: Average age of females
     * Write a function that calculates the average age of all females,
     * extracted from an array of persons.
     *
     * @return {Number} - Average age.
     */
    self.averageAgeOfAllWomen = function () {
      var age = self.list.filter(function (person) {
        return person.gender;
      }).reduce(function (sum, person, index, array) {
        return (sum + person.age / array.length);
      }, 0);

      return age;
    };


    /**
     * P5: Youngest person
     * Write a function that finds the youngest male person in a given array
     * of people and prints his full name.
     *
     * @return {String} - The full name of the youngest male person.
     */
    self.youngest = function () {
      /* eslint no-extend-native: 0 */

      // ECMAScript 5:
      // Array prototype is read only, properties should not be added.
      if (!Array.prototype.find) {
        Array.prototype.find = function(callback) {
          var i, len = this.length;
          for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
              return this[i];
            }
          }
        };
      }

      var youngest = self.list.sort(function (a, b) {
        return a.age - b.age;
      }).find(function (person) {
        return !person.gender;
      });

      return youngest.firstName + ' ' + youngest.lastName;
    };


    /**
     * P6: Group people
     * Write a function that groups an array of persons by first letter of
     * first name and returns the groups as a JavaScript Object.
     *
     * @return {Object} - Grouped people.
     */
    self.groupByFirstLetter = function () {
      return self.list.reduce(function (obj, person) {
        if (obj[person.firstName[0]]) {
          obj[person.firstName[0]].push(person);
        }
        else {
          obj[person.firstName[0]] = [person];
        }

        return obj;
      }, {});
    };

    return self;
  }());

  exports.People = People;

})(typeof exports === 'undefined' ? window : exports);
