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
  const newArray = [];
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  } else {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];

      if (element === '--discard-next') {
        if (i + 1 < arr.length) {
          i++;
        }
      } else if (element === '--discard-prev') {
        if (arr[i - 2] == '--discard-next') {
          continue
        } else if (i > 0) {
          newArray.pop()
        }
      } else if (element === '--double-next') {
        if (i + 1 < arr.length) {
          newArray.push(arr[i + 1])
        }

      } else if (element === '--double-prev') {
        if (arr[i - 2] == '--discard-next') {
          continue
        } else if (i > 0) {
          newArray.push(arr[i - 1])
        }
      } else {
        newArray.push(element)
      }
    }
  }
  return newArray
}

module.exports = {
  transform
};
