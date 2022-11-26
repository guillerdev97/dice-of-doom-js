"use strict";

// dom manipulation
const addBtn = document.getElementById("add-btn");
const restartBtn = document.getElementById("restart");
const currentPlayers = document.getElementById("current");
const dismissedPlayers = document.getElementById("dismissed");
const winner = document.getElementById("winner");

// variables
const currentArray = [];

// events
addBtn.addEventListener("click", function () {
  const name = prompt("Write the name of the player!");

  currentArray.push(name);

  currentArray.forEach((el) => {
    const div = document.createElement("div");
    div.classList.add("item");
    

    const p = document.createElement("p");
    p.innerHTML = el;
    const icon = document.createElement("p");
    icon.innerHTML = "Delete";

    div.appendChild(p);
    div.appendChild(icon);

    currentPlayers.appendChild(div);
  });
});
