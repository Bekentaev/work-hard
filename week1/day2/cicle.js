// 1

for (let i = 1; i < 11; i++) {
  //   console.log(i);
}

function userNum() {
  let n = +prompt("send number: ");
  let res = 0;
  for (let i = 1; i <= n; i++) {
    res += i;
  }
  //   console.log(res);
  //   return alert(res);
}

// 3

for (let i = 1; i <= 20; i++) {
  i++;
  //   console.log(i);
}

// 3 v2

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) {
    // console.log(i);
  }
}

// 4

for (let i = 10; i >= 0; i--) {
  if (i != 0) {
    // console.log(i);
  } else {
    // console.log("START!!");
  }
}

// 5

function factorial(n) {
  let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(factorial(5));

// 6

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return false;
}

// 7

function swap(n) {
  let strN = n + "";
  let res = "";
  for (let i = strN.length - 1; i >= 0; i--) {
    res += strN[i];
  }
  return +res;
}

// 8

function multiTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} * ${i} = `, n * i);
  }
}

//  9
function sumOfNum(n) {
  let strN = n + "";
  let res = 0;
  for (let i = 0; i < strN.length; i++) {
    res += +strN[i];
  }
  return res;
}

console.log(sumOfNum(123));
//10
function fibbanaci(n) {
  if (n == 1 || n == 2) {
    return 1;
  }
  return fibbanaci(n - 1) + fibbanaci(n - 2);
}
