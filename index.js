let bgContainerEl = document.getElementById("bgContainer")
let headingEl = document.createElement("h1");
headingEl.textContent = "Add To Cart";
headingEl.classList.add("main-heading");
bgContainerEl.appendChild(headingEl);
let cartContainerEl = document.getElementById("cartContainer");
bgContainerEl.appendChild(cartContainerEl);
let itemsContainer = document.createElement("div");
itemsContainer.style.textAlign = "center"
bgContainerEl.appendChild(itemsContainer);
let itemsHeadingEl = document.createElement("h1");
itemsHeadingEl.textContent = "My Cart items";
itemsHeadingEl.classList.add("heading");
itemsContainer.appendChild(itemsHeadingEl);
let cartItemTextInputEl = document.getElementById("cartItemTextInput");
let buttonEl = document.getElementById("addBtn");
let cartItemsContainerEl = document.getElementById("cartItemsContainer")
itemsContainer.appendChild(cartItemsContainerEl)

function addTodoItems() {
    let cartItemEl = document.createElement("li");
    let cartItemText = cartItemTextInputEl.value;
    cartItemEl.textContent = cartItemText;


    itemsContainer.appendChild(cartItemEl)
    cartItemTextInputEl.value = "";

}

buttonEl.onclick = function() {
    addTodoItems()
}