/*

A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

Don’t forget to test wrapping from z to a.
Don’t forget to test keeping the same case.
Don’t forget to test punctuation!
For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

Example:

Hello world --> Jfmmp xpsme   
the "encryption" is the next letter of the original.. for example H --> J and the e --> f and so on...

*/

function caesarCipher(str, shift) {
    // Convert the shift to a positive value within the range of 0-25
    shift = ((shift % 26) + 26) % 26;
  
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      // Encrypt uppercase letters
      if (char.match(/[A-Z]/)) {
        let code = ((char.charCodeAt() - 65 + shift) % 26) + 65;
        char = String.fromCharCode(code);
      }
      // Encrypt lowercase letters
      else if (char.match(/[a-z]/)) {
        let code = ((char.charCodeAt() - 97 + shift) % 26) + 97;
        char = String.fromCharCode(code);
      }
  
      result += char;
    }
  
    return result;
  }
  
  // Example usage

  console.log(caesarCipher("Hello World!", 3)); // Outputs: "Khoor, Zruog!"
  

module.exports = caesarCipher;

