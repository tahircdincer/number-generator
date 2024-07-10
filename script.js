"use strict";

const inputArea = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.querySelector(".container");
const divLength = [...document.querySelectorAll("div")].length;
btn.addEventListener("click", function () {
  let num;
  num = document.createElement("div");
  const inputAreaValue = inputArea.value;
  if (!inputArea.value) {
    alert(" Enter a number. ");
    return;
  } else if (Number(inputArea.value) % 2 === 0) {
    num.textContent = `${inputArea.value}`;
  } else if (Number(inputArea.value) % 2 !== 0) {
    num.style.backgroundColor = "red";
    num.textContent = `${inputArea.value}`;
  } else if (isPrime(inputAreaValue)) {
    num.textContent = `${inputArea.value}`;
    num.style.backgroundColor = "orange";
  }

  container.appendChild(num);
});

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

// it requires to improve ' prime number ' ' part ' of this ' project '
