let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(productName + ' has been added to your cart.');
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize cart from localStorage if available
window.onload = function () {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
}