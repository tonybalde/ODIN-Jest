/* An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}; */

function analyzeArray(arr) {
  const obj = { average: 0, min: 0, max: 0, length: 0 };

  if (arr.length === 0) {
    return obj;
  } else {
    let average;
    min = Math.min(...arr);
    max = Math.max(...arr);
    let length = arr.length;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    obj.average = sum / length;
    obj.min = min;
    obj.max = max;
    obj.length = length;

    return obj;
  }
}

console.log(analyzeArray([]));
console.log(analyzeArray([1, 2]));
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
