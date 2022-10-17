const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const arr = n.toString().split('');

  let maxNumber = 0;

  for (let i = 0; i < arr.length; i++) {
      let j = +(arr.slice(0, i) + arr.slice(i + 1)).split(',').join('');
      if (j > maxNumber) {
          maxNumber = j;
      }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
