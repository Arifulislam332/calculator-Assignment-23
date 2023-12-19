"use strict";

const display = document.querySelector(".display");
let expression = "";

function showExpression(value) {
  expression += value;
  display.value = expression;
}

function calculated() {
  try {
    const result = eval(expression).toFixed(5);
    display.value = result;
    expression = result;
  } catch (error) {
    display.value = "Math Error";
    expression = "";
  }
}

function allClear() {
  expression = "";
  display.value = "";
}

function deleteInput() {
  const digitClear = display.value.slice(0, -1);
  display.value = digitClear;
  expression = digitClear;
}
