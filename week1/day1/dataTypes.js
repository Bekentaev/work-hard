// 1

let number = 1;
let str = "string";
let bool = true;
let nothing = null;
let undef = undefined;
let obj = { name: "Abylay", age: 23 };
let arr = [1, 2, 3];
let sym = Symbol("hi");
console.log(
  typeof number,
  typeof str,
  typeof bool,
  typeof nothing,
  typeof undef,
  typeof obj,
  typeof arr,
  typeof sym
);

// 2

let isNumber = 0;
console.log(typeof isNumber == "number");

// 3

// let isArray = [];
// console.log(typeof isArray == "object");
let isArray = [];
console.log(Array.isArray(isArray)); // true
// так как  типоф возвращает объект лучше использовать Array.isArray

// 4
// 1
// NaN
// 1

// 5

number = "123";

console.log(+number);
console.log(number * 1);
console.log(Number(number));

//  6

function isType(arg) {
  if (arg === null) return "null";
  return typeof arg;
}
