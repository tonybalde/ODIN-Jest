// Import the function to be tested
const capitalize = require('./capitalize');

// Test case 1: Capitalize the first letter of a string
test('Capitalize first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

// Test case 2: Empty string should return empty string
test('Empty string should return empty string', () => {
  expect(capitalize("")).toBe("");
});

// Test case 3: Non-string input should return the input as-is
test('Non-string input should return the input as-is', () => {
  expect(capitalize(123)).toBe(123);
});
