const array = ["html", "css", "js"];
const body = document.body;

const render = (arr) => {
  const ul = document.createElement("ul");
  body.append(ul);
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.textContent = arr[i];
    ul.append(li);
  }
};
render(array);
