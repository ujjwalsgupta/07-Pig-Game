"use strict";

//todo: Selecting Elements

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
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

const scores = [0, 0]; //* scores array stores the total scores of each player.
let currentScore = 0;
let activePlayer = 0; //* Here, active player is the variable which has values 0 & 1 as active player 0 holds value 0 & active player 1 holds value 1.

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //* The text content will change according to the active player, if activePlayer = 1, then the score will be added to the id "current--1" & due to which current1Element will change.
  } else {
    // randomDiceNumber === 1
    // Switch to next player

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // changing current active players' current score to 0 before switching to the active player.

    activePlayer = activePlayer === 0 ? 1 : 0;
    //* task of above code: Switching the active player when 1 comes.
  }
});
