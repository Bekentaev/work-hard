"use strict";

function calculator(a, b, c) {
  if (a == !typeof "number" && c == !typeof "number") {
    return "incorrect number";
  }

  if ((b == "/" || b == "%") && (a == 0 || c == 0)) {
    return "0 не делиться";
  } else if (b == "/") return a / c;
  else if (b == "%") return a % c;
  if (b == "+") return a + c;
  if (b == "-") return a - c;
  if (b == "*") return a * c;
  if (b == "**") return a ** c;
}

console.log(calculator(5, "/", 30));
