const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let encodedLine = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
      const current = str[i];
      const next = str[i + 1];

      if (current === next) {
          count++;
      } else {
          if (count !== 1) encodedLine += count;

          encodedLine += current;
          count = 1;
      }
  }
  return encodedLine;
}

module.exports = {
  encodeLine
};
