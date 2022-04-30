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
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let stringUpper = string.toUpperCase();
    let keyUpper = key.padEnd(string.length, key).toUpperCase();
    let count = 0;

    for (let i = 0; i < stringUpper.length; i++) {
      if (stringUpper.charCodeAt(i) >= 65 && stringUpper.charCodeAt(i) <= 90) {
        result += String.fromCharCode((stringUpper.charCodeAt(i) + keyUpper.charCodeAt(count)) % 26 + 65);
        count++;
      }
      else {
        result += stringUpper[i];
      }
    }

    let reversedResult = result.split('').reverse().join('')

    return (this.direct) ? result : reversedResult;

  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    let stringUpper = string.toUpperCase();
    let keyUpper = key.padEnd(stringUpper.length, key).toUpperCase();
    let count = 0;

    for (let i = 0; i < stringUpper.length; i++) {
      if (stringUpper.charCodeAt(i) >= 65 && stringUpper.charCodeAt(i) <= 90) {
        result += String.fromCharCode((stringUpper.charCodeAt(i) - keyUpper.charCodeAt(count) + 26) % 26 + 65);
        count++;
      }
      else {
        result += stringUpper[i];
      }
    }

    let reversedResult = result.split('').reverse().join('')

    return (this.direct) ? result : reversedResult;
  }
}


module.exports = {
  VigenereCipheringMachine
};
