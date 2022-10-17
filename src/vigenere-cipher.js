const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  encrypt() {}
  decrypt() {
      throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
  }

  constructor(direct = true) {
      this.isDirect = direct;
  }

  encrypt(string, key) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!string || !key) throw new Error('Incorrect arguments!');
      let arr = string.toLowerCase();
      key = key.toLowerCase();
      let decode = [];
      let char;
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr.charCodeAt(i) > 96 && arr.charCodeAt(i) < 123) {
              char =
                  arr.charCodeAt(i) + key.charCodeAt(j) - 97 > 122
                      ? arr.charCodeAt(i) + key.charCodeAt(j) - 97 - 26
                      : arr.charCodeAt(i) + key.charCodeAt(j) - 97;
              decode[i] = String.fromCharCode(char);
              j += 1;
              j = j >= key.length ? j - key.length : j;
          } else {
              decode[i] = arr.charAt(i);
          }
      }
      if (this.isDirect == false) decode.reverse();
      return decode.join('').toUpperCase();
  }
  decrypt(string, key) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!string || !key) throw new Error('Incorrect arguments!');
      let arr = string.toLowerCase();
      key = key.toLowerCase();
      let decode = [];
      let char;
      let j = 0;

      for (let i = 0; i < arr.length; i++) {
          if (arr.charCodeAt(i) > 96 && arr.charCodeAt(i) < 123) {
              char =
                  arr.charCodeAt(i) - key.charCodeAt(j) + 97 < 97
                      ? arr.charCodeAt(i) - key.charCodeAt(j) + 97 + 26
                      : arr.charCodeAt(i) - key.charCodeAt(j) + 97;
              decode[i] = String.fromCharCode(char);
              j += 1;
              j = j >= key.length ? j - key.length : j;
          } else {
              decode[i] = arr.charAt(i);
          }
      }
      if (this.isDirect == false) decode.reverse();
      return decode.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
