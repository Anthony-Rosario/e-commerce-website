import { addToCart } from '../shopping-cart/cart-api.js';
// import { putLocalStorage, pullFromLocStorage, findById } from '../shopping-cart/utils.js';
// import { getCart, setCart } from '../shopping-cart/cart-api.js';


export function renderSkateboards(skateboards){
    const li = document.createElement('li');
    li.id = 'product-list';

    const h3 = document.createElement('h3');
    h3.textContent = skateboards.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = skateboards.image;
    li.append(img);

    const pDescription = document.createElement('p');
    pDescription.textContent = skateboards.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.textContent = skateboards.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.textContent = `$${skateboards.price}`;
    li.append(pPrice);

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = 1;
    quantityInput.placeholder = 'quantity: 1';
    li.append(quantityInput);
    
    const buttonAdd = document.createElement('button');
    buttonAdd.id = skateboards.id;
    buttonAdd.value = skateboards.code;
    buttonAdd.textContent = 'Add To Cart';
    li.append(buttonAdd);

    buttonAdd.addEventListener('click', () => {
        addToCart(skateboards.id);
    });
    
    return li;
}


// export function incrementQuantity() {
//     const quantArray = [];
//     const skateboards = pullFromLocStorage('PRODUCTS');

//     for (let i = 0; i < skateboards.length; i++) {
//         const currQuantity = {
//             id: skateboards[i].id,
//             quantity: Number(1)
//         };
//         quantArray.push(currQuantity);
//     }
//     putLocalStorage('quantity', quantArray);
// }

