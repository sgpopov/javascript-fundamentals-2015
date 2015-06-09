var str = require('../src/11-strings.js').str;

describe('Strings', function () {
  'use strict';

  it('should reverse the input string', function () {
    expect(str.reverse('qwerty')).toBe('ytrewq');
    expect(str.reverse('Lorem ipsum dolor sit amet')).toBe('tema tis rolod muspi meroL');
  });

  it('should check if given expression is put correctly', function () {
    expect(str.isExpressionCorrect('((a+b)/5-d)')).toBeTruthy();
    expect(str.isExpressionCorrect(')(a+b))')).toBeFalsy();
  });

  it('should count the occurrences of a substring', function () {
    var input = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

    expect(str.countSubstring(input, 'in')).toBe(9);
    expect(str.countSubstring(input, 'We', false)).toBe(4);
    expect(str.countSubstring(input, 'we', true)).toBe(1);
    expect(str.countSubstring(input, 'We', true)).toBe(3);
  });

  it('should parse the tags', function () {
    var input = 'We are <lowcase>LIVING</lowcase> in a <upcase>yellow submarine</upcase>. We <upcase>don\'t</upcase> have <lowcase>AnyThiNG</lowcase> else.';

    expect(str.parse(input)).toBe('We are living in a YELLOW SUBMARINE. We DON\'T have anything else.');

    // input = '<upcase><lowcase><upcase><lowcase>qwerty</lowcase></upcase></lowcase></upcase>';

    // expect((str.parse(input))).toBe('QWERTY');
  });

  it('should extract text from HTML', function () {
    var input = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';

    expect(str.extractText(input)).toBe('Sample sitetextmore textand more...in body');
  });

  it('should parse URL', function () {
    var expected = {
      'protocol': 'http',
      'server': 'telerikacademy.com',
      'resource': '/Courses/Courses/Details/239'
    };

    expect(str.parseURL('http://telerikacademy.com/Courses/Courses/Details/239')).toEqual(expected);
  });

  it('should replace <A>-elements with [URL]-tags', function () {
    expect(str.replaceTags('<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>')).toBe('<p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course. Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>');
  });

  it('should extract all emails from the given text', function () {
    var input = 'Cedric Pardit <c.pardi@inconu.com>, Emmanuel <emmanuel.brounidd7@fixe.com>, Claire et Francois <contact@jamaka.com>, Dominique Braud-Poloul <dbpoloul@hik.com>, michel.ours@yahoo.com';

    var expected = [
      'c.pardi@inconu.com',
      'emmanuel.brounidd7@fixe.com',
      'contact@jamaka.com',
      'dbpoloul@hik.com',
      'michel.ours@yahoo.com'
    ];

    expect(str.extractEmails(input)).toEqual(expected);
  });

  it('should extract all palindroms from the given text', function () {
    var input = 'Lorem ipsum Eye dolor sit Noon amet, consectetur Pop adipisicing elit. Radar Velit fugiat rem sed. Nihil praesentium, magni dolores, Level quisquam incidunt Kayak accusantium, non vero cupiditate Rotator cumque voluptate mollitia. Est explicabo corporis maxime voluptas?';

    var palindroms = ['Eye', 'Noon', 'Pop', 'Radar', 'Level', 'Kayak', 'non', 'Rotator'];

    expect(str.findPalindromes(input)).toEqual(palindroms);
  });

  it('should format the string', function () {
    expect(str.formatString('Hello {0}!', 'Peter')).toBe('Hello Peter!');
    expect(str.formatString('{0}, {1}, {0} text {2}', 1, 'Pesho', 'Gosho')).toBe('1, Pesho, 1 text Gosho');
  });

  it('should generate list', function () {
    var tmpl = '<strong>-{name}-</strong> <span>-{age}-</span>';
    var data = [
      {'name': 'Therese Blanchard', 'age': 24},
      {'name': 'Schultz Henson', 'age': 28},
      {'name': 'Contreras Barlow', 'age': 28},
      {'name': 'Shepard Tyson', 'age': 24},
      {'name': 'Hobbs Hess', 'age': 32},
      {'name': 'Tracie Martinez', 'age': 40},
      {'name': 'Hopkins Mclean', 'age': 37},
      {'name': 'Madge Byrd', 'age': 32},
      {'name': 'Jessica Peck', 'age': 22},
      {'name': 'Barnes Buckley', 'age': 36}
    ];

    var expected = '' +
    '<ul>' +
    '<li><strong>Therese Blanchard</strong> <span>24</span></li>' +
    '<li><strong>Schultz Henson</strong> <span>28</span></li>' +
    '<li><strong>Contreras Barlow</strong> <span>28</span></li>' +
    '<li><strong>Shepard Tyson</strong> <span>24</span></li>' +
    '<li><strong>Hobbs Hess</strong> <span>32</span></li>' +
    '<li><strong>Tracie Martinez</strong> <span>40</span></li>' +
    '<li><strong>Hopkins Mclean</strong> <span>37</span></li>' +
    '<li><strong>Madge Byrd</strong> <span>32</span></li>' +
    '<li><strong>Jessica Peck</strong> <span>22</span></li>' +
    '<li><strong>Barnes Buckley</strong> <span>36</span></li>' +
    '</ul>';

    expect(str.generateList(data, tmpl)).toBe(expected);
  });
});
