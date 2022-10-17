const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr))
      throw new Error("'arr' parameter must be an instance of the Array!");

  const newArr = arr.slice();
  let outArr = [];

  for (let i = 0; i < newArr.length; i++) {
      switch (newArr[i]) {
          case undefined:
              continue;

          case '--discard-next':
              delete newArr[i + 1];
              break;

          case '--discard-prev':
              if (newArr[i - 1] !== undefined) outArr.pop();
              break;

          case '--double-next':
              if (newArr[i + 1] !== undefined) outArr.push(newArr[i + 1]);
              break;

          case '--double-prev':
              if (newArr[i - 1] !== undefined) outArr.push(newArr[i - 1]);
              break;

          default:
              outArr.push(newArr[i]);
              break;
      }
  }
  return outArr;
}

module.exports = {
  transform
};
