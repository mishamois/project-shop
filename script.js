var cartCounter = 0;
    var cartDisplay = document.querySelector('#cart span');

    function addToCart() {
        cartCounter++;
        cartDisplay.textContent = cartCounter;
    }

    var addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', addToCart);
    });