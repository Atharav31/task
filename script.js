// Initialize an empty array to store items in the cart
let cartItems = [];

// Function to add an item to the cart
function addToCart(productName, price) {
    // Add the item to the cartItems array
    cartItems.push({ productName: productName, price: price });

    // Calculate the total price of all items in the cart
    let total = calculateTotal();
    // Show the updated cart total
    showCartTotal(total);
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        total += parseFloat(cartItems[i].price.replace(/[^\d.]/g, ''));
    }
    return total;
}

// Function to display the total price of items in the cart
function showCartTotal(total) {
    alert("Item added to cart!\nTotal: ₹" + total.toFixed(2));
}

// Function to view the cart
function viewCart() {
    let total = calculateTotal();
    let cartContent = "Your Cart:\n";
    for (let i = 0; i < cartItems.length; i++) {
        cartContent += cartItems[i].productName + " - " + cartItems[i].price + "\n";
    }
    if (cartItems.length === 0) {
        cartContent += "Your cart is empty.";
    } else {
        cartContent += "\nTotal: ₹" + total.toFixed(2) + "\n\nClick OK to proceed to checkout.";
    }
    if (confirm(cartContent)) {
        // Proceed to checkout or perform any other action here
        // For now, we'll just clear the cartItems array
        alert("Order placed");
        cartItems = [];
    }
}
