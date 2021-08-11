const cart = document.querySelector('.newProducts__cart__item');
cart.addEventListener('click', cartClickHandler);

function cartClickHandler() {
    cart.classList.add('cart_show')
}