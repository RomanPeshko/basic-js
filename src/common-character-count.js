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
  s1 = s1.split('');
  s2 = s2.split('');
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    const element = s1[i];
    const mass = [];
    const foundMass = mass.find(x => x === element)
    if (!foundMass) {
      mass.push(element)
      for (let i = 0; i < s2.length; i++) {
        const elem = s2[i];
        if (element === elem) {
          count++;
          s2.splice(s2.indexOf(elem), 1)
          break;
        }
      }
    }

  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
