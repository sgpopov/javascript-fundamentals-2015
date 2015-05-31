var funcs = require('../src/08-functions.js').funcs;

describe('Functions', function () {
  'use strict';

  it('should return the last digit as a word', function () {
    expect(funcs.lastDigitAsWord(512)).toBe('two');
    expect(funcs.lastDigitAsWord(1024)).toBe('four');
    expect(funcs.lastDigitAsWord(12309)).toBe('nine');
  });

  it('should reverse the number', function () {
    expect(funcs.reverseNumber(256)).toBe(652);
    expect(funcs.reverseNumber(123.45)).toBe(54.321);
  });

  it('should count numb. of occurrences of a given word correctly', function () {
    var input = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then';

    expect(funcs.wordOccurrences(input, 'far')).toBe(4);
    expect(funcs.wordOccurrences(input, 'Far', true)).toBe(1);
    expect(funcs.wordOccurrences(input, 'a')).toBe(6);
    expect(funcs.wordOccurrences(input, 'A', true)).toBe(1);
    expect(funcs.wordOccurrences(input, 'a', true)).toBe(5);
    expect(funcs.wordOccurrences(input, 'svil4ok')).toBe(0);
  });

  it('should count the number of html elements', function () {
    var html = document.createElement('body');
    var content = '<header><nav><ul><li>Your menu</li> </ul> </nav> </header> <section> <article> <header> <h2>Article title</h2> <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p> </header> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> </article> <article> <header> <h2>Article title</h2> <p>Posted on <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p> </header> <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p> </article> </section> <aside> <h2>About section</h2> <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p> </aside> <footer> <p>Copyright 2015 Your name</p> </footer>';
    html.innerHTML = content;

    expect(funcs.countHtmlElements(html, 'a')).toBe(4);
    expect(funcs.countHtmlElements(html, 'p')).toBe(6);
    expect(funcs.countHtmlElements(html, 'li')).toBe(1);
  });

  it('shoud count how many times given number appears in given array', function () {
    var array = [25, 68, 72, 47, 43, 54, 68, 56, 45, 93, 72, 47, 43, 54, 68, 56];

    expect(funcs.countAppearance([], 0)).toBe('wrong input data');
    expect(funcs.countAppearance(array, 25)).toBe(1);
    expect(funcs.countAppearance(array, 54)).toBe(2);
    expect(funcs.countAppearance(array, 68)).toBe(3);
    expect(funcs.countAppearance(array, 0)).toBe(0);
  });

  it('should checks if the element at given position in given array of integers is bigger than its two neighbours', function () {
    expect(funcs.largerThanNeighbours([], 0)).toBe('not enough elements');
    expect(funcs.largerThanNeighbours([25], 1)).toBe('not enough elements');
    expect(funcs.largerThanNeighbours([25, 68], 1)).toBe('not enough elements');
    expect(funcs.largerThanNeighbours([25, 68, 72], 2)).toBe('not enough neighbours');
    expect(funcs.largerThanNeighbours([25, {}, 72], 1)).toBe('not a valid numbers');

    expect(funcs.largerThanNeighbours([25, 68, 72], 1)).toBe(false);
    expect(funcs.largerThanNeighbours([25, 68, 72, 47], 2)).toBe(true);
  });

  it('should return the index of the first element in array that is larger than its neighbours', function () {
    expect(funcs.firstLargerThanNeighbours([])).toBe(-1);
    expect(funcs.firstLargerThanNeighbours([25])).toBe(-1);
    expect(funcs.firstLargerThanNeighbours([25, 68])).toBe(-1);
    expect(funcs.firstLargerThanNeighbours([25, 68, 72])).toBe(-1);
    expect(funcs.firstLargerThanNeighbours([25, 68, 72, 47, 43, 54, 68, 56, 45, 93, 72, 47, 43, 54, 68, 56])).toBe(2);
    expect(funcs.firstLargerThanNeighbours(['B', 'C', 'A', 68, {}, 47, 'A', 54, 68, 56])).toBe(8);
  });
});
