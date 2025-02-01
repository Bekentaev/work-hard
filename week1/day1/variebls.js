// day 1
// Задачи на переменные 1
let name = "Abylay",
  age = 23,
  isStudent = true;

console.log(name, age, isStudent);

// 2

const BIRTH_DAY = "26.07.2001";

console.log(BIRTH_DAY);

// BIRTH_DAY = "25.01.2002";

// console.log(BIRTH_DAY); TypeError: assignment to constant variable

// 3

let city = "Uralsk";
console.log("Я живу в", city);
city = "Astana";
console.log("Я живу в", city);

// 4

let a = 4;
let b = 6;

// 1. (a = b), (b = a);

console.log(a, b);

// 5

let price = 100;

price = price - price / 5;
console.log(price);

// 6

let firstName = "Абылай";
let lastName = "Orochi";

let fullName = firstName + " " + lastName;

console.log(fullName);

// 7
// let user = prompt("");

// console.log("Привет,!", user);

//8

let userName = prompt("name:");
let userAge = prompt("age: ");

console.log(`Привет, ${userName}! Тебе ${userAge} года.`);
