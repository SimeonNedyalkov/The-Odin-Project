"use strict";

let list = ["Rock", "Paper", "Scissors"];

let playerSelection = prompt("Pick Rock, Paper or Scissors: ");

let getComputerChoice = function () {
  const randnumb = Math.floor(Math.random() * 3);
  return list[randnumb];
};

let checkresult = function () {
  let comp_choice = getComputerChoice();
  console.log(comp_choice, playerSelection);
  if (comp_choice == "Rock") {
    let welcome = (document.getElementById(
      "welcome"
    ).textContent = `Computer picks ${comp_choice} and you pick ${playerSelection}`);
    if (playerSelection == "Scissors") {
      return "Computer wins";
    } else if (playerSelection == "Paper") {
      return "You win";
    } else {
      return "Its a draw";
    }
  } else if (comp_choice == "Scissors") {
    let welcome = (document.getElementById(
      "welcome"
    ).textContent = `Computer picks ${comp_choice} and you pick ${playerSelection}`);
    if (playerSelection == "Paper") {
      return "Computer wins";
    } else if (playerSelection == "Rock") {
      return "You win";
    } else {
      return "Its a draw";
    }
  } else if (comp_choice == "Paper") {
    let welcome = (document.getElementById(
      "welcome"
    ).textContent = `Computer picks ${comp_choice} and you pick ${playerSelection}`);
    if (playerSelection == "Rock") {
      return "Computer wins";
    } else if (playerSelection == "Scissors") {
      return "You win";
    } else {
      return "Its a draw";
    }
  }
};
let welcome = (document.getElementById(
  "welcome"
).textContent = `Computer picks `);
let result = (document.querySelector(".result").textContent = checkresult());
