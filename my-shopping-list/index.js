const input = document.querySelector("#item");
const addBtn = input.nextElementSibling;
const ul = document.querySelector("ul");

function handleClick(e) {
  e.preventDefault();

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.addEventListener("click", handleDelete);

  const listFragment = document.createDocumentFragment();
  listFragment.append(span, button);
  li.appendChild(listFragment);
  ul.appendChild(li);

  input.value = "";
  input.focus();
}

function handleDelete(e) {
  e.target.parentNode.remove();
  input.focus();
}

addBtn.addEventListener("click", handleClick);
