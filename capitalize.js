
function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
      return str; // Return original input if it's not a non-empty string
    }
  
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

module.exports = capitalize;  
