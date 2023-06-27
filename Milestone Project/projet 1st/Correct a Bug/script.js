const cart = [1, 2, 65, 36]
const newCart = doubleQuantity(cart)

function doubleQuantity(cart){
    const newCart = cart.map(q => q * 2)
    return newCart 
}

console.log(newCart);