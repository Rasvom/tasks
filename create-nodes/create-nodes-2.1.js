const array = ["html", "css", "js"];
const body = document.body;
const ul = document.createElement("ul");
body.append(ul);

for (let i = 0; i < array.length; i++) {
  const li = document.createElement("li");
  li.textContent = array[i];
  ul.append(li);
}
