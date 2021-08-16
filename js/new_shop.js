const activeItem = document.querySelector('.new_shop__item_1');
const svgList = document.querySelector('.new_shop__svg');
const priceArea = document.querySelector('.new_shop__price_area');
console.log(priceArea);


activeItem.addEventListener('click', listClickHandler);

function listClickHandler() {
    svgList.classList.add('js_active');
    priceArea.classList.add('price_active');
    activeItem.classList.add('list_active')

}

