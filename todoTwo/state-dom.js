const body = document.body;
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const todo = document.getElementById("todo-list");

let array = [
  {
    text: "Loresum",
    done: true,
  },
  {
    text: "Lorm",
    done: true,
  },
  {
    text: "em ipsum",
    done: true,
  },
  {
    text: "Lor22sum",
    done: true,
  },
];

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") return;
  array.push({
    text: input.value,
    done: true,
  });
  todo.innerHTML = "";
  render(array);
});

const render = (arr) => {
  todo.innerHTML = "";
  arr.map((item, i) => {
    const div = document.createElement("div");
    const textDiv = document.createElement("div");
    const removeButton = document.createElement("button");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    div.classList.add("list__item");
    textDiv.textContent = item.text;
    removeButton.textContent = "x";

    div.append(checkbox, textDiv, removeButton);
    todo.append(div);

    removeButton.addEventListener("click", () => {
      remove(i);
    });
    checkbox.addEventListener("click", (e) => {
      const parent = e.target.parentElement;
      checkTodo(parent, i);
    });
  });
};
render(array);

const remove = (i) => {
  array.splice(i, 1);
  render(array);
};

const checkTodo = (parent, i) => {
  parent.firstElementChild.checked
    ? (array[i].done = true)
    : (array[i].done = false);
  array[i].done
    ? (parent.style.background = "red")
    : (parent.style.background = "");
};
