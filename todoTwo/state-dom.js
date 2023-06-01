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
    done: false,
  },
  {
    text: "em ipsum",
    done: true,
  },
  {
    text: "Lor22sum",
    done: false,
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
    checkbox.checked = item.done;
    div.classList.add("list__item");
    textDiv.textContent = item.text;
    removeButton.textContent = "x";

    div.append(checkbox, textDiv, removeButton);
    todo.append(div);

    array[i].done
      ? (checkbox.parentElement.style.background = "red")
      : (checkbox.parentElement.style.background = "");

    removeButton.addEventListener("click", () => {
      remove(i);
    });
    checkbox.addEventListener("click", () => {
      checkTodo(i);
    });
  });
};
render(array);

const remove = (i) => {
  array.splice(i, 1);
  render(array);
};

const checkTodo = (i) => {
  todo.innerHTML = "";
  array[i].done = !array[i].done;
  render(array);
};
