const newUl = document.createElement("ul");
newUl.classList.add("list");
const li = document.createElement("li");
li.textContent = "привет, мир";
newUl.prepend(li);

console.log(newUl);
console.log(li);