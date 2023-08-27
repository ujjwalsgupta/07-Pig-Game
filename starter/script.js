"use strict";

//todo: Selecting Elements

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");

//? .getElementById("IdName"):
//* this method is used to select the id mentioned inside it.
//* The only difference between .querySelector("") & .getElementById("") is that querySelector is universal (i.e., it can select by elementName, .className, #idName) but getElementById only selects the Id inside it without # symbol.

//todo: PHASE 1: Starting Conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
diceImg.classList.add("hidden");
