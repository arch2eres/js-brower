const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: "center" });
  input.value = "";
}

let id = 0; // UUID
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
    <div class="item" data-id=${id}>
        <span class="item__name">${text}</span>
        <button class="item__delete"><i class="fas fa-trash-alt" data-id=${id}></i></button>
    </div>
    <div class="item__devider"></div>`;
  id++;
  //   const item = document.createElement("div");
  //   item.setAttribute("class", "item");

  //   const itemName = document.createElement("span");
  //   itemName.setAttribute("class", "item__name");
  //   itemName.innerText = text;

  //   const itemDelete = document.createElement("button");
  //   itemDelete.setAttribute("class", "item__delete");
  //   itemDelete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  //   itemDelete.addEventListener("click", () => {
  //     items.removeChild(itemRow);
  //   });

  //   const itemDivider = document.createElement("div");
  //   itemDivider.setAttribute("class", "item__devider");

  //   item.appendChild(itemName);
  //   item.appendChild(itemDelete);

  //   itemRow.appendChild(item);
  //   itemRow.appendChild(itemDivider);
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
