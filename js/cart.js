// Get the cart items from localStorage or initialize an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || { items: [], total: 0 };

// Function to add an item to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  let cartItem = cart.items.find(function(i) {
    return i.name === item.name;
  });

  if (cartItem) {
    // If the item is already in the cart, increase its quantity
    cartItem.quantity += 1;
  } else {
    // Otherwise, add the item to the cart with a quantity of 1
    cart.items.push({
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }

  // Update the cart total
  cart.total += item.price;

  // Save the cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to remove an item from the cart
function removeFromCart(item) {
  // Find the item in the cart
  let cartItem = cart.items.find(function(i) {
    return i.name === item.name;
  });

  if (cartItem) {
    // If the item is in the cart, decrease its quantity
    cartItem.quantity -= 1;

    // If the item quantity is 0, remove it from the cart
    if (cartItem.quantity === 0) {
      cart.items = cart.items.filter(function(i) {
        return i.name !== item.name;
      });
    }

    // Update the cart total
    cart.total -= item.price;

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}

// Function to clear the cart
function clearCart() {
  cart = { items: [], total: 0 };
  localStorage.removeItem('cart');
}

// Function to get the cart items
function getCartItems() {
  return cart.items;
}

// Function to get the cart total
function getCartTotal() {
  return cart.total;
}
