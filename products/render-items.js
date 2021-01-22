import { addToCart } from '../shopping-cart/cart-api.js';


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
        const addQuantity = quantityInput.valueAsNumber;
        addToCart(skateboards.id, addQuantity);
    });
    
    return li;
}
