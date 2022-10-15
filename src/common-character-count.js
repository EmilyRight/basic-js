const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let count = 0;
    let map1 = {};
    let map2 = {};
  const arr1 = s1.split('');
  const arr2 = s2.split('');
    arr1.forEach((el) => {
        if(!map1.hasOwnProperty(el)) {
          map1[el] = 0;
        }
        map1[el] +=1
    })

    arr2.forEach((el) => {
      if(!map2.hasOwnProperty(el)) {
        map2[el] = 0;
      }
      map2[el] += 1;
  })
  console.log(Object.keys(map1));
  console.log(map2);
    Object.keys(map1).forEach((key) => {
      if(Object.keys(map2).includes(key)) {
        console.log(key, map1[key], map2[key]);
        map1[key] >= map2[key]?
        count += map2[key]:
        count += map1[key]
      }
    })
    console.log(count);
  return count;
}

getCommonCharacterCount('aabcc', 'adcaa')
module.exports = {
  getCommonCharacterCount
};
