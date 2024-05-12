var cartCounter = 0;
    var cartDisplay = document.getElementById('cart');

    function addToCart() {
        cartCounter++;
        cartDisplay.textContent = 'Корзина (' + cartCounter + ')';
    }

    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', addToCart);
    });