const body = document.body;
const div = document.createElement("div");
const ul = document.createElement("ul");
const li = document.createElement("li");
const liTwo = document.createElement("li");
const a = document.createElement("a");
const aTwo = document.createElement("a");

a.setAttribute("href", "https://instagram.com/intocode");
aTwo.setAttribute("href", "https://intocode.ru");

a.textContent = "наш инстаграм";
aTwo.textContent = "наш сайт";

body.append(div);
div.append(ul);
ul.append(li, liTwo);
li.append(a);
liTwo.append(aTwo);
