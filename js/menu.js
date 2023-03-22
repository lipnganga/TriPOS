const items = [];
let total = 0;

function addItem(price) {
  items.push(price);
  total += price;
  updateCart();
}

function removeItem(index) {
  const price = items.splice(index, 1)[0];
  total -= price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = `Item ${i + 1}: $${items[i]} <button onclick="removeItem(${i})">Remove</button>`;
    cartItems.appendChild(li);
  }
  document.getElementById("cart-total").innerHTML = `$${total}`;
}
