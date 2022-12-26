"use strict";

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  return a / b;
};

const operate = function (func, a, b) {
  return func(a, b);
};

const allbuttons = document.querySelectorAll(".number");
const alloperators = document.querySelectorAll(".operator");
const okbtn = document.querySelector(".okbtn");
const equal = document.querySelector(".equals");
let returnedvalue = 0;
let new_returnedvalue = 0;
let total_value = 0;
let returned_operator = "";

for (let i = 0; i < allbuttons.length; i++) {
  console.log(allbuttons[i]);
  allbuttons[i].addEventListener("click", function game() {
    returnedvalue = Number(allbuttons[i].textContent);
    okbtn.addEventListener("click", function () {
      if (new_returnedvalue === 0) {
        document.querySelector(".firstnumber").textContent = returnedvalue;
      } else if (new_returnedvalue === 1) {
        document.querySelector(".secondnumber").textContent = returnedvalue;
      }
      new_returnedvalue += 1;
    });
  });
}

for (let i = 0; i < alloperators.length; i++) {
  console.log(alloperators[i]);
  alloperators[i].addEventListener("click", function () {
    returned_operator = String(alloperators[i].textContent);
    document.querySelector(".displayedoperator").textContent =
      returned_operator;
  });
}
equal.addEventListener("click", function () {
  let n1 = Number(document.querySelector(".firstnumber").textContent);
  let n2 = Number(document.querySelector(".secondnumber").textContent);
  if (returned_operator == "+") {
    total_value = operate(add, n1, n2);
    document.querySelector(".totalvalue").textContent = total_value;
  } else if (returned_operator == "-") {
    total_value = operate(subtract, n1, n2);
    document.querySelector(".totalvalue").textContent = total_value;
  } else if (returned_operator == "*") {
    total_value = operate(multiply, n1, n2);
    document.querySelector(".totalvalue").textContent = total_value;
  } else if (returned_operator == "/") {
    total_value = operate(divide, n1, n2);
    document.querySelector(".totalvalue").textContent = total_value;
  }
});
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  document.querySelector(".firstnumber").textContent = 0;
  document.querySelector(".secondnumber").textContent = 0;
  document.querySelector(".totalvalue").textContent = 0;
  returnedvalue = 0;
  new_returnedvalue = 0;
  total_value = 0;
});
