function stringLength(str) {
  if (typeof str !== 'string') return 'Wrong input!';
  str = str.replace(' ', '');
  if (str.length === 0 || str.length > 10) return 'Too short or too long!';
  return str.length;
}

function reverseString(str) {
  if (typeof str !== 'string') return 'Wrong input!';
  str = str.split('').reverse();
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr.concat(str[i]);
  }
  return newStr;
}

function capitalize(string) {
  if (typeof string !== 'string') return 'Wrong input!';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Calculator {
  constructor(number = 0) {
    this.total = number;
  }

  add(number) {
    if (typeof number !== 'number') return 'Wrong input!';
    this.total += number;
    return this.total;
  }
  subract(number) {
    if (typeof number !== 'number') return 'Wrong input!';
    this.total -= number;
    return this.total;
  }
  multiply(number) {
    if (typeof number !== 'number') return 'Wrong input!';
    this.total *= number;
    return this.total;
  }
  divide(number) {
    if (typeof number !== 'number') return 'Wrong input!';
    this.total /= number;
    return this.total;
  }
}

module.exports = { stringLength, reverseString, capitalize, Calculator };
