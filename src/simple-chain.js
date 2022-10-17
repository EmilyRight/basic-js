const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
 const chainMaker = {
  chain: [],

  getLength() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      return this.chain.length;
  },
  addLink(value) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.chain.push(`${String(value)}`);
      return this;
  },
  removeLink(position) {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      if (!this.chain[position - 1]) {
          this.chain = [];
          throw new Error("You can't remove incorrect link!");
      }

      this.chain.splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      this.chain.reverse();
      return this;
  },
  finishChain() {
      // throw new NotImplementedError('Not implemented');
      // remove line with error and write your code here
      let chainLink = '';

      for (let i = 0; i < this.chain.length; i++) {
          if (i === 0) {
              chainLink += `( ${this.chain[i]} )`;
          } else {
              chainLink += `~~( ${this.chain[i]} )`;
          }
      }

      this.chain = [];

      return chainLink;
  },
};

module.exports = {
  chainMaker
};
