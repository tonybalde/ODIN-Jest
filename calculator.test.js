const calculator = require("./calculator");

test("Sum 1 and 2 and get 3", () => {
    expect(calculator.sum(1,2)).toBe(3);
})

test("Substract 5 minus 2 and get 3", () => {
    expect(calculator.substract(5,2)).toBe(3);
})

test("Divide 8 by 2 and get 4", () => {
    expect(calculator.divide(8,2)).toBe(4);
})


test("Multiply 6 by 2 and get 12", () => {
    expect(calculator.multiply(6,2)).toBe(12);
})

