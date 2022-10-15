const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 let catsLength = []
 function countCats(matrix) {
  // const newArr = matrix.flat(60).join(',');
  //   console.log(newArr)
  // const regex = /[^\s]\^\^/g;

  // catsLength = newArr.match(regex);

  // return catsLength.length;
  let cats = 0;
  matrix.forEach((arr) => {
    arr.forEach((el) => {
      if(typeof el == 'string' && el == '^^') {
        cats+=1
      }
    })
  })
  return cats;
}

module.exports = {
  countCats
};
