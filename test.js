const { sumArray } = require('./arrayUtils.js');

const numbers = [1, 2, 3, 4, 5];
const expectedSum = 15;
const sum = sumArray(numbers);

if (sum === expectedSum) {
  console.log('sumArray test passed!');
} else {
  console.error('sumArray test failed!');
}
