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
  let result = '';
  for (i = 0; i < str.length; i++) {
    let element = str[i];
    let count = 1;
    while (element === str[i + 1]) {
      count++;
      i++;
    }
    result += `${(count === 1) ? '' : count}${element}`;
  }
  return result;
}

module.exports = {
  encodeLine
};
