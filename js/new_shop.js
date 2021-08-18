const activeItem = document.querySelector('.new_shop__item_1');
const svgList = document.querySelector('.new_shop__svg');
const priceArea = document.querySelector('.new_shop__price_area');
const image = document.querySelector('.new_shop__image_1');

activeItem.addEventListener('click', listClickHandler);

function listClickHandler() {
    svgList.classList.add('js_active');
    priceArea.classList.add('price_active');
    activeItem.classList.add('list_active');
    image.classList.add('image_active')

}

