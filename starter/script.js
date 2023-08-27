"use strict";

//todo: Selecting Elements

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.querySelector(".current--0");
const diceImg = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

//? .getElementById("IdName"):
//* this method is used to select the id mentioned inside it.
//* The only difference between .querySelector("") & .getElementById("") is that querySelector is universal (i.e., it can select by elementName, .className, #idName) but getElementById only selects the Id inside it without # symbol.

//todo: PHASE 1: Starting Conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
diceImg.classList.add("hidden");

let currentScore = 0;

//todo: PHASE 2: Rolling Dice Functionality (Roll Dice Button)

rollDiceBtn.addEventListener("click", function () {
  //* Generating Random Dice Roll
  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceNumber);

  //* Display Dice
  diceImg.classList.remove("hidden");
  diceImg.src = `dice-${randomDiceNumber}.png`;

  //* Check for rolled 1: if true, switch to next player
  if (randomDiceNumber !== 1) {
    // Add dice No. to current score
    currentScore += randomDiceNumber;
    current0Element.textContent = currentScore;
  } else {
    // Switch to next player
  }
});
