(function (exports) {
  'use strict';

  var str = (function () {
    var self = this;

    /**
     * P1: Reverse string
     * Write a JavaScript function that reverses a string and returns it.
     *
     * @param  {String} input - Given string
     * @return {String} - Reversed string.
     */
    self.reverse = function (input) {
      var output = '';

      for (var i = input.length - 1; i >= 0; i -= 1) {
        output += input[i];
      }

      return output;

      // return input.split('').reverse().join('');
    };


    /**
     * P2: Correct brackets
     * Write a JavaScript function to check if in a given expression the
     * brackets are put correctly.
     *
     * @param  {String}  input - Given expression.
     * @return {Boolean} -
     */
    self.isExpressionCorrect = function (input) {
      function isMatching(a, b) {
        return (a === '(' && b === ')') || (a === '{' && b === '}') ||
          (a === '[' && b === ']');
      }

      var brackets = [];

      for (var i = 0; i < input.length; i += 1) {
        var current = input[i];

        if (current === '(' || current === '{' || current === '[') {
          brackets.push(current);
        }
        else if (current === ')' || current === '}' || current === ']') {
          if (brackets.length === 0 || !isMatching(brackets.pop(), current)) {
            return false;
          }
        }
      }

      return brackets.length === 0;
    };


    /**
     * P3: Sub-string in text
     * Write a JavaScript function that finds how many times a substring is
     * contained in a given text (perform case insensitive search).
     *
     * @param  {String} input - Given string.
     * @param  {String} substring - Given substring.
     * @param  {Boolean} caseSensitive - Default: false
     * @return {Number} - Number of occurrences.
     */
    self.countSubstring = function (input, substring, caseSensitive) {
      return input.match(new RegExp(substring, 'g' + (caseSensitive ? '' : 'i')) || []).length;
    };

    /**
     * P4: Parse tags
     * You are given a text. Write a function that changes the text
     * in all regions:
     *  - <upcase>text</upcase> to uppercase.
     *  - <lowcase>text</lowcase> to lowercase
     *  - <mixcase>text</mixcase> to mix casing(random)
     *
     * @param  {String} input - Given string.
     * @return {String} - Formatted string.
     */
    self.parse = function (input) {
      input = input.replace(/<mixcase>(.*?)<\/mixcase>/gi, function (match, text) {
        var result = '';
        var mixed = 0;

        for (var i = 0; i < text.length; i += 1) {
          mixed = Math.round(Math.random());
          result += (mixed === 0) ? text[i].toLowerCase() : text[i].toUpperCase();
        }

        return result;
      });

      input = input.replace(/<upcase>(.*?)<\/upcase>/gi, function (match, text) {
        return text.toUpperCase();
      });

      input = input.replace(/<lowcase>(.*?)<\/lowcase>/gi, function (match, text) {
        return text.toLowerCase();
      });

      return input;
    };


    /**
     * P5: nbsp
     * Write a function that replaces non breaking white-spaces in a
     * text with &nbsp;
     *
     * @param  {String} input -
     * @return {String} -
     */
    self.nbsp = function (input) {
      return input.replace(new RegExp(String.fromCharCode(160), 'g'), '&nbsp;');
    };


    /**
     * P6: Extract text from HTML
     * Write a function that extracts the content of a HTML page given as text.
     *
     * @param  {String} input - Given HTML page as a text.
     * @return {String} - Extracted text.
     */
    self.extractText = function (input) {
      var openingTagIndex = input.indexOf('<');
      var closingTagIndex = input.indexOf('>');
      var currentTag = '';

      while (openingTagIndex > -1) {
        currentTag = input.substring(openingTagIndex, closingTagIndex + 1);
        input = input.replace(currentTag, '');

        openingTagIndex = input.indexOf('<');
        closingTagIndex = input.indexOf('>');
      }

      return input;
    };


    /**
     * P7: Parse URL
     * Write a script that parses an URL address given in the format:
     * [protocol]://[server]/[resource] and extracts from it the
     * [protocol], [server] and [resource] elements.
     *
     * @param  {String} url - Given URL.
     * @return {Object} -
     */
    self.parseURL = function (url) {
      var link = document.createElement('a');
      link.href = url;

      return {
        'protocol': link.protocol.replace(':', ''),
        'server': link.hostname,
        'resource': link.pathname.replace(/^([^/])/, '/$1')
      };
    };

    /**
     * P8: Replace tags
     * Write a JavaScript function that replaces in a HTML document given as
     * string all the tags <a href="…">…</a> with
     * corresponding tags [URL=…]…/URL].
     *
     * @param  {String} input -
     * @return {String} -
     */
    self.replaceTags = function (input) {
      var linkOpeningIndex = input.indexOf('<a href="');

      while (linkOpeningIndex > -1) {
        input = input.replace('<a href="', '[URL=');
        input = input.replace('">', ']');
        input = input.replace('</a>', '[/URL]');

        linkOpeningIndex = input.indexOf('<a href="');
      }

      return input;
    };


    /**
     * P9: Extract e-mails
     * Write a function for extracting all email addresses from given text.
     *
     * @param  {String} input -
     * @return {Array} -
     */
    self.extractEmails = function (input) {
      return input.match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/gi);
    };


    /**
     * P10: Find palindromes
     * Write a program that extracts from a given text all palindromes,
     * e.g. "ABBA", "lamal", "exe".
     *
     * @param  {String} input -
     * @return {Array} -
     */
    self.findPalindromes = function (input) {
      var words = input.match(/\s?(\w+)\s?/g);
      var result = [];

      for (var i = 0; i < words.length; i += 1) {
        if (words[i].trim().toLowerCase() === words[i].trim().toLowerCase().split('').reverse().join('')) {
          result.push(words[i].trim());
        }
      }

      return result;
    };

    /**
     * P11: String format
     * Write a function that formats a string using placeholders.
     * The function should work with up to 30 placeholders and all types.
     *
     * @param  {String} input - String with placeholders.
     * @return {String} - Formatted string.
     */
    self.formatString = function (input) {
      var args = arguments;

      return input.replace(/{(\d+)}/g, function (match, placeholder) {
        return args[(placeholder * 1) + 1];
      });
    };


    /**
     * P12: Generate list
     * Write a function that creates a HTML <ul> using a template for
     * every HTML <li>.
     * The source of the list should be an array of elements.
     * Replace all placeholders marked with –{…}– with the value of the
     * corresponding property of the object.
     *
     * @param  {Array} data - Source of the list.
     * @param  {String} template -
     * @return {String} - Generated list.
     */
    self.generateList = function (data, template) {
      var output = '';
      var current, content;

      for (var i = 0; i < data.length; i += 1) {
        content = template;
        current = data[i];

        for (var property in current) {
          content = content.replace('-{' + property + '}-', current[property]);
        }

        output += '<li>' + content + '</li>';
      }

      return '<ul>' + output + '</ul>';
    };

    return self;
  }());

  exports.str = str;

})(typeof exports === 'undefined' ? window : exports);
