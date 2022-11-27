"use strict";

// dom manipulation
// buttons
const addBtn = document.getElementById("add-btn");
const restartBtn = document.getElementById("restart");
// lists
const currentPlayers = document.getElementById("current");
const eliminatedPlayers = document.getElementById("dismissed");
const winner = document.getElementById("winner");

// variables
const currentList = [];
const eliminatedList = [];

// events
// add player
addBtn.addEventListener("click", function () {
  const name = getName();

  if (name.length > 0 && name != null) {
    currentList.push(name);

    currentList.forEach((el) => {
      createItem(el);
    });
  }
});

function getName() {
  const name = prompt("Write the name of the player!");

  return name;
}

function createItem(el) {
  const item = document.createElement("div");
  item.classList.add("item");

  const textName = document.createElement("p");
  textName.innerHTML = el;
  const textDelete = document.createElement("p");
  textDelete.classList.add("delete");
  textDelete.innerHTML = "Delete";

  item.appendChild(textName);
  item.appendChild(textDelete);

  currentPlayers.appendChild(item);
}
