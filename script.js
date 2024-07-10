"use strict";

const inputArea = document.querySelector("input");
const btn = document.querySelector("button");
const container = document.querySelector(".container");
const divLength = [...document.querySelectorAll("div")].length;
btn.addEventListener("click", function () {
  let num;
  num = document.createElement("div");
  if (Number(inputArea.value) == NaN) {
    alert(" Enter a number. ");
    inputArea.textContent = "";
    return;
  } else if (!inputArea.value) {
    alert(" Enter a number. ");
    return;
  } else {
    num.textContent = `${inputArea.value}`;
  }

  checkNumber();

  container.appendChild(num);
});

function checkNumber() {
  for (let i = 0; i < container.length; i++) {
    if (parseInt(inputArea.value) % 2 === 0) {
      num.style.backgroundColor = "red";
    }
  }
}
