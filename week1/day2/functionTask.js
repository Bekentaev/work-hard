"use strict";
// 1
function convertTemperature(celsius) {
  let farengeit = (celsius * 9) / 5 + 32;
  return farengeit;
}

// 2

function isPrime(num) {
  if (num == 2) {
    return "this is prime";
  }
  if (num > 1 && num / 1 == num && num / num == 1 && !(num % 2 == 0)) {
    return "this is prime";
  } else {
    return "this num not PRIME";
  }
}

//  3

function checkParity(num) {
  return (num = num % 2 == 0 ? (num = "Чётное") : (num = "Нечётное"));
}
// 4

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

function maxOfThree(a, b, c) {
  a = max(a, b);
  b = max(b, c);
  return max(a, b);
}

function maxOfThree2(a, b, c) {
  a = a > b ? a : b;
  b = b > c ? b : c;
  return a > b ? a : b;
}

// 5

function checkSign(num) {
  if (num > 0) {
    return "Положительное";
  } else if (num == 0) {
    return "Ноль";
  } else {
    return "Отрицательное";
  }
}

// 6

function swap(a, b) {
  let res = ([a, b] = [b, a]);
  return res;
}

function swap2(a, b) {
  let temp = b;
  b = a;
  return [temp, b];
}

function swap3(a, b) {
  let temp = b + "" + a;
  return temp;
}

// 7

function isLeapYears(year) {
  if (year % 4 == 0 && year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
