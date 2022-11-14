const htmlList = document.getElementById("list");
let shoppingList = ["Latte", "Uova", "Prosciutto", "Salame", "Farina", "Mozzarella"];
let count = 0;

function addToList() {
  htmlList.innerHTML = "";
  count = 0;
  while (count < shoppingList.length) {
    const element = document.createElement("li");
    element.innerHTML = `                    
  <input type="checkbox" name="${shoppingList[count]}" id="${count}">
    <label for="${count}">${shoppingList[count]}</label>
    `;
    htmlList.append(element);
    count++;
  }
}
addToList();

const insert = document.getElementById("insert");

insert.addEventListener("click", () => {
  let text = document.getElementById("addList").value.trim();
  if (text !== "") {
    shoppingList.push(text);
    addToList();
  }
});

const remove = document.getElementById("remove");

remove.addEventListener("click", () => {
  const checked = document.querySelectorAll("li > input[type=checkbox]");
  shoppingList = shoppingList.filter((value, index) => {
    if (!checked[index].checked) return value;
  });

  addToList();
  console.log(shoppingList);
});
