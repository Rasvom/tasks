const div = document.createElement("div");
const divTwo = document.createElement("div");
const divThree = document.createElement("div");

div.classList.add("red");
divTwo.classList.add("green");
divThree.classList.add("blue");
divThree.textContent = "Я вложен";

div.append(divTwo);
divTwo.append(divThree);

console.log(div);