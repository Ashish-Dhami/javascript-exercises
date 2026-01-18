const container = document.querySelector(".container");
const board = document.querySelector(".board");
const customizeBtn = document.createElement("button");
customizeBtn.textContent = "Customize";
customizeBtn.className = "btn-base";
customizeBtn.addEventListener("click", () => {
  let custom_ROWSxCOLS;
  do {
    custom_ROWSxCOLS = +prompt("Number of squares per side (max 100)");
  } while (custom_ROWSxCOLS > 100);
  if (!custom_ROWSxCOLS) return;

  cleanupBoard();
  renderBoard(custom_ROWSxCOLS);
});

function renderBoard(ROWSxCOLS = 50) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < ROWSxCOLS; i++) {
    const row = document.createElement("div");
    row.className = "row";
    fragment.appendChild(row);
    for (let j = 0; j < ROWSxCOLS; j++) {
      const col = document.createElement("div");
      col.className = "col";
      col.style.opacity = "0.1";

      col.addEventListener("mouseenter", () => {
        // col.style.backgroundColor = "#fbfbfb";
        col.style.backgroundColor = randRGB();
        if (+col.style.opacity < 1)
          col.style.opacity = `${+col.style.opacity + 0.1}`;
      });
      // col.addEventListener("mouseleave", () => {
      //   col.style.backgroundColor = "transparent";
      // });
      row.appendChild(col);
    }
  }
  board.appendChild(fragment);
}

function randRGB() {
  const min = 120;
  const rand = () => Math.floor(min + Math.random() * (256 - min));
  return `rgb(${rand()}, ${rand()}, ${rand()})`;
}

function cleanupBoard() {
  board.replaceChildren();
}

function init() {
  container.appendChild(customizeBtn);
  renderBoard();
}

init();
