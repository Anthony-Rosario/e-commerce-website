import { skateboards } from '../data/data.js';
// import { cartSkateboards } from '../data/cart.js';
import { renderCartTable } from './cart-utils.js';
import { findById, calculateTotal } from '../utils.js';
import { getCart } from '../shopping-cart/cart-api.js';


const cart = getCart();

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

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart, true, 2));
});


