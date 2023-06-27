const calculateCartTotal = cartItems => {
    let total = 0;
  
    // Iterate through each item in the cart
    cartItems.forEach(item => {
      // Multiply the unit price by the quantity and add it to the total
      total += item.price * item.quantity;
    });
  
    return total;
  }
  
  // Example usage
  const cart = [
    { price: 10.50, quantity: 2 },
    { price: 7.25, quantity: 1 },
    { price: 15.00, quantity: 3 },
    { price: 8.75, quantity: 2 }
  ];
  
  const total = calculateCartTotal(cart);
  console.log(`Total cost of items: ${total}`);