"use strict";

document.addEventListener("DOMContentLoaded", counting);

const myArray = [];
let bar = document.querySelectorAll(".bar");

function counting() {
  const queueSize = getNumberOfCustomers();
  myArray.push(queueSize);

  if (myArray.length > 40) {
    myArray.shift();
  }

  bar.forEach(function(div, i) {
    div.style.height = `${myArray[i]}0px`;
  });

  console.log(myArray);

  setTimeout(counting, 250);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 36);
}
