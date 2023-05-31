const array = [
  {
    name: "Google",
    url: "https://google.com",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
  },
  {
    name: "intocode",
    url: "https://intocode.ru",
  },
];

const body = document.body;

const render = (arr) => {
  const ul = document.createElement("ul");
  body.append(ul);
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.append(a);
    a.textContent = arr[i].name;
    a.setAttribute("href", `${arr[i].url}`);
    ul.append(li);
    li.append(a);
  }
};
render(array);
