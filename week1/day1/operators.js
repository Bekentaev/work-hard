// 1
let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 2

let strNum = "23";
console.log(10 + strNum);

// так происходит так как сложение преобразует цифры встроку в отличие от других операторов

// 3

let num = 1;

console.log(++num, num++, --num, num--);
// здесь нам становится 2 потом стоновится 3 но так как постфиксная не показвает последнее измениние то показывает  2
// далее префиксная 3 становится 2 из за дикримента и результат снова 1

// 4

let isAdult = 19;
let hasTicket = true;

console.log(isAdult > 18 && hasTicket);
console.log(isAdult > 18 || hasTicket);
console.log(isAdult > 18 && !hasTicket);

// 5

let x = 2;
let y = "Hi";

console.log(x && y); // будет тру так как в 2 это будет тру, и строка не пустая
console.log(x || y); // так же тру так как один из них тру
console.log(x || !y); // тру так как х тру

x = null;
y = undefined;

console.log(x && y); //  здесь выводится  сразу нул так как первый фалс дальше нет смысла проверять
console.log(x || y); // здесь также
console.log(x || !y); // здесь тру так как ! переводит в бул

// 6

let num1 = "3",
  num2 = 3;

console.log(num1 + num2);

// 7

let c = 23;
let v = 26;

console.log(c > v ? "Первое больше" : "Второе больше");

// 8

let number = +prompt("");

console.log(number % 2 == 0 ? "четное" : "не четное");
