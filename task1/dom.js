const body = document.body;
const createDiv = document.createElement("div");
const createSpan = document.createElement("span");
const createDivTwo = document.createElement("div");
const createDivThree = document.createElement("div");
const createA = document.createElement("a");
const createATwo = document.createElement("a");
const createAThree = document.createElement("a");

body.prepend(createDiv);
const div = body.firstElementChild;
div.append(createDivTwo);
const divTwo = div.lastElementChild;
div.append(createDivThree);
const divThree = div.firstElementChild.nextElementSibling;
divThree.append(createA, createATwo, createAThree);
const linkOne = divThree.firstElementChild;
const linkTwo = linkOne.nextElementSibling;
const linkThree = divThree.lastElementChild;

div.style.margin = "auto";
div.style.width = "300px";
divTwo.style.border = "1px solid red";
divTwo.style.borderRadius = "5px";
divTwo.style.padding = "5px";
divThree.style.display = "flex";
divThree.style.justifyContent = "space-between";
divTwo.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisincing, elit. Voluptate, incidunt cumque in! In, omnis repellendus";

linkOne.textContent = "intocode";
linkTwo.textContent = "google";
linkThree.textContent = "instagram";
linkOne.setAttribute("href", "https://intocode.ru/");
linkTwo.setAttribute("href", "https://www.google.com/");
linkThree.setAttribute("href", "https://www.instagram.com/");