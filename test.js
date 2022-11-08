const assert = require('assert');
const {
  stringLength,
  reverseString,
  capitalize,
  Calculator,
} = require('./string-methods');

describe('String methods', function () {
  it('Length of string', function () {
    const string1 = 'Hello';
    const string2 = '';
    const string4 = 'Hello, Micronaut!';
    const wrongInput = 34;
    assert(stringLength(string1) === 5);
    assert(stringLength(string2) === 'Too short or too long!');
    assert(stringLength(string4) === 'Too short or too long!');
    assert(stringLength(wrongInput) === 'Wrong input!');
  });

  it('Reverse a string', function () {
    const string1 = 'hello';
    const wrongInput = 34;
    assert(reverseString(string1) === 'olleh');
    assert(reverseString(wrongInput) === 'Wrong input!');
  });

  it('Capitalize a string', function () {
    const string1 = 'yonas';
    const string2 = 'a';
    const string3 = 125;
    const firstCapitalized = capitalize(string1);
    const secondCapitalized = capitalize(string2);
    const wrongInput = capitalize(string3);
    assert(firstCapitalized === 'Yonas');
    assert(secondCapitalized === 'A');
    assert(wrongInput === 'Wrong input!');
  });
});

describe('Calculator', function () {
  it('Add number', function () {
    const calculator = new Calculator();
    const firstAdd = calculator.add(4);
    const secondAdd = calculator.add('f');
    assert(firstAdd === 4);
    assert(secondAdd === 'Wrong input!');
  });

  it('Subtract number', function () {
    const calculator = new Calculator(15);
    const firstSubtract = calculator.subract(4);
    const secondSubtract = calculator.subract('f');
    assert(firstSubtract === 11);
    assert(secondSubtract === 'Wrong input!');
  });

  it('Multiply number', function () {
    const calculator = new Calculator(4);
    const firstMultiply = calculator.multiply(2);
    const secondMultiply = calculator.multiply('x');
    assert(firstMultiply === 8);
    assert(secondMultiply === 'Wrong input!');
  });

  it('Divide number', function () {
    const calculator = new Calculator(20);
    const firstDivide = calculator.divide(5);
    const secondDivide = calculator.divide('u');
    assert(firstDivide === 4);
    assert(secondDivide === 'Wrong input!');
  });
});
