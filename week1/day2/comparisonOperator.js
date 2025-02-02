// 1
function maxNum(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Они равны";
  }
}

// 2
function isEven(a) {
  return a % 2 == 0;
}
//3
function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешён";
  } else {
    return "Доступ запрещён";
  }
}
// 4
function calculate(a, b, operator) {
  if (operator == "*") {
    return a * b;
  } else if (operator == "/") {
    return a / b;
  } else if (operator == "+") {
    return a + b;
  } else if (operator == "-") {
    return a - b;
  } else {
    return "incorrect";
  }
}

// 5
function checkLogin(login, password) {
  if (login === "admin" && password === "12345") {
    return "Добро пожаловать!";
  } else {
    return "Ошибка: неверный логин или пароль";
  }
}
