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
  let arr = String(n).split('').map((el) => +el);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.splice(arr[i], 1))
  }
  // let min = Math.min(...arr);
  // let newNumber = arr.splice(arr.indexOf(min), 1);
  // let newArr = Number(arr.join(''));
  console.log(newArr)
  return newArr;
}
deleteDigit(342)
module.exports = {
  deleteDigit
};
