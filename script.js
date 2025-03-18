// Initialize the cart array
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Add the item to the cart array
  cart.push({ name: itemName, price: itemPrice });
  updateCartUI();
}

// Function to remove an item from the cart
function removeFromCart(itemIndex) {
  // Remove the item at the specified index
  cart.splice(itemIndex, 1);
  updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');
  cartItems.innerHTML = ''; // Clear current cart items

  let total = 0;

  // Loop through cart items and add them to the cart list
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    
    // Add a remove button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.onclick = function() {
      removeFromCart(index);
    };
    li.appendChild(removeButton);
    
    cartItems.appendChild(li);
  });

  // Update total price
  cartTotal.textContent = total.toFixed(2);

  // Update cart item count in the header
  cartCount.textContent = cart.length;
}

// Handle checkout button click
document.getElementById('checkout-btn').addEventListener('click', function() {
  if (cart.length === 0) {
    alert('Your cart is empty. Add items to your cart before proceeding.');
  } else {
    alert('Proceeding to checkout...');
    // Redirect to the checkout page or handle checkout functionality here
    // window.location.href = 'checkout.html'; // Example redirect to checkout page
  }
});

// Example function to add items to the cart (use this in your product pages)
function exampleAddToCart(itemName, itemPrice) {
  addToCart(itemName, itemPrice);
}

// Example usage for adding products to cart
document.querySelector('#product1-btn').addEventListener('click', function() {
  exampleAddToCart('Product 1', 2499); // Adding Product 1
});

document.querySelector('#product2-btn').addEventListener('click', function() {
  exampleAddToCart('Product 2', 2999); // Adding Product 2
});

document.querySelector('#product3-btn').addEventListener('click', function() {
  exampleAddToCart('Product 3', 1899); // Adding Product 3
});

document.querySelector('#product4-btn').addEventListener('click', function() {
  exampleAddToCart('Product 4', 3499); // Adding Product 4
});

// Initial call to update the cart UI when the page loads
updateCartUI();
