"use strict";

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const today = new Date();
let currentDate = today.getDate();
let currentMonth = 1 + today.getMonth();
let currentYear = today.getFullYear();

const calc = document.querySelector(".arrowDown");

const dayDisplay = document.querySelector(".dayDisplay");
const monthDisplay = document.querySelector(".monthDisplay");
const yearDisplay = document.querySelector(".yearDisplay");

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      validator = false;
    } else if (day > 12) {
      month.style.borderColor = "red";
      month.parentElement.querySelector("small").innerText =
        "must be valid month.";
      validator = false;
    } else if (day > 31) {
      day.style.borderColor = "red";
      day.parentElement.querySelector("small").innerText = "must be valid day.";
      validator = false;
    } else {
      i.style.borderColor = "black";
      parent.querySelector("small").innerText = "";
      validator = true;
    }
  });
  return validator;
}

function handleCalc(e) {
  e.preventDefault();

  if (validate()) {
    if (day.value > currentDate) {
      currentDate = currentDate + months[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (month.value > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }
  }

  dayDisplay.textContent = currentDate - day.value;
  monthDisplay.textContent = currentMonth - month.value;
  yearDisplay.textContent = currentYear - year.value;
}
calc.addEventListener("click", handleCalc);
