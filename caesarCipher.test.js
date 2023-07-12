
const caesarCipher = require("./caesarCipher")

test("Cipher a string", () => {
    expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
})

test("Cipher a long sentence with exclamation point", () => {
    expect(caesarCipher("Hello World!!", 2)).toBe("Jgnnq Yqtnf!!");
})






