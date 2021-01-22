import { skateboards } from '../data/data.js';
import { renderCartTable } from './cart-utils.js';
import { findById, calculateTotal } from '../utils.js';
import { clearCart, getCart } from '../shopping-cart/cart-api.js';
import { CART } from './cart-api.js';


const cart = getCart();
const cartData = getCart(CART);

function renderTotalRow() {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td2.textContent = 'Order Total';
    td3.textContent = `$${calculateTotal(cart, skateboards)}`;
    tr.append(td1, td2, td3);
    table.append(tr);
}

const table = document.querySelector('tbody');

for (let item of cart) {
    const product = findById(item.id, skateboards);
    const tableRowDOM = renderCartTable(item, product);

    table.append(tableRowDOM);
}

renderTotalRow();


const button1 = document.querySelector('#order');

if (cartData.length === 0) { 
    button1.disabled = true;
} else button1.disabled = false;


button1.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart, true, 2));
    clearCart(CART);
});

const button2 = document.querySelector('#clear-cart');

button2.addEventListener('click', () => {
    clearCart();
    location.reload();
});


