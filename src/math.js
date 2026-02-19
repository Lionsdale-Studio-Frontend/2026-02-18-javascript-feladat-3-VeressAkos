function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a + b;
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a - b;
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  return a * b;
}

function divide(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  }
  if (b === 0) {
    return null;
  }
  return a / b;
}

function sumArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let num of numbers) {
    if (typeof num !== 'number') {
      return null;
    }
    sum += num;
  }
  return sum;
}

function average(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  for (let num of numbers) {
    if (typeof num !== 'number') {
      return null;
    }
  }
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

function max(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  for (let num of numbers) {
    if (typeof num !== 'number') {
      return null;
    }
  }
  return Math.max(...numbers);
}

function min(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  if (numbers.length === 0) {
    return null;
  }
  for (let num of numbers) {
    if (typeof num !== 'number') {
      return null;
    }
  }
  return Math.min(...numbers);
}

function isEven(number) {
  if (typeof number !== 'number') {
    return null;
  }
  if (!Number.isInteger(number)) {
    return null;
  }
  return number % 2 === 0;
}

function factorial(n) {
  if (typeof n !== 'number') {
    return null;
  }
  if (!Number.isInteger(n)) {
    return null;
  }
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sumArray,
  average,
  max,
  min,
  isEven,
  factorial
}