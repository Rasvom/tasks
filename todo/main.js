const body = document.body;
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const todo = document.getElementById("todo-list");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  create(input.value);
});

const create = (value) => {
  const div = document.createElement("div");
  const textDiv = document.createElement("div");
  const removeButton = document.createElement("button");
  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";
  div.classList.add("list__item");

  textDiv.textContent = value;
  removeButton.textContent = "x";

  div.append(checkbox, textDiv, removeButton);
  todo.append(div);
  input.value = "";

  removeButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  checkbox.addEventListener("click", (e) => {
    const checkbox = e.target;
    const parent = checkbox.parentElement;
    parent.toggleAttribute("checked");
    checkbox.checked
      ? (parent.style.background = "red")
      : (parent.style.background = "");
  });
};
