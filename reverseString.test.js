const reverseString = require('./reverseString.js');

test('reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse the given string with uppercase letters', () => {
    expect(reverseString('Hello World!')).toBe('!dlroW olleH');
});



