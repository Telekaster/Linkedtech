const cart = document.querySelector('.newProducts__cart__item');
cart.addEventListener('click', cartClickHandler);

function cartClickHandler() {
    cart.classList.add('cart_show')
}



const body = document.querySelector('body');

body.addEventListener('click', (evt) => {
    if (evt.target.parentNode.className === "") {
        cart.classList.remove('cart_show');
    }
})