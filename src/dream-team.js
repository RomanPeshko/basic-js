const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let str = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      const element = members[i];
      if (typeof (element) === 'string') {
        element.split(' ');
        for (let i = 0; i < element.length; i++) {
          const elem = element[i];
          if (elem === ' ' && typeof (elem[0]) !== 'number') {

          } else {
            str.push(elem[0].toUpperCase())
            break
          }
        }
      }
    }
  } else {
    return false
  }

  return str.length === 0 ? false : str.sort().join('');
}

module.exports = {
  createDreamTeam
};
