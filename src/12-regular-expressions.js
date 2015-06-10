(function (exports) {
  'use strict';

  var regExp = (function () {
    var self = this;

    self.format = function (input) {
      /* eslint no-extend-native: 0, consistent-this: 0 */

      String.prototype.format = String.prototype.format || function (options) {
        var output = this;
        var exp;

        for (var option in options) {
          exp = new RegExp('#{' + option + '}', 'g');

          output = output.replace(exp, options[option]);
        }

        return output;
      };

      return input.format(arguments[1]);
    };


    /**
     * P2: HTML binding
     * Write a function that puts the value of an object into the
     * content/attributes of HTML tags.
     *
     * @param  {String} input - Given string
     * @param  {Object} args - Given content/attributes.
     * @return {String} - Formatted text.
     */
    self.bind = function (input, args) {
      /* eslint no-extend-native: 0, consistent-this: 0 */

      String.prototype.insertAt = String.prototype.insertAt || function (index, str) {
        return [this.slice(0, index), str, this.slice(index)].join('');
      };

      String.prototype.bind = String.prototype.bind || function (attrs) {
        var output = this;
        var exp = /(?:data\-bind\-(\w+)="(\w+)")/g;
        var matches = {};
        var m, match;

        while ((m = exp.exec(output)) !== null) {
          matches[m[1]] = m[2];
        }

        for (match in matches) {
          if (matches.hasOwnProperty(match)) {
            if (match === 'content') {
              var closingAngleBracketIdx = output.indexOf('>') + 1;

              output = output.insertAt(closingAngleBracketIdx, attrs[matches[match]]);
            }
            else {
              var quotesIndex = output.lastIndexOf('\"') + 1;
              var str = ' ' + match + '="' + attrs[matches[match]] + '"';

              output = output.insertAt(quotesIndex, str);
            }
          }
        }

        return output;
      };

      return input.bind(args);
    };

    return self;
  }());

  exports.regExp = regExp;

})(typeof exports === 'undefined' ? window : exports);
