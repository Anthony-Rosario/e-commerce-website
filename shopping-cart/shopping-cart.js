import { skateboards } from '../data/data.js';
import { cartSkateboards } from './cart.js';
import { renderCartTable } from '../shopping-cart/render-line-items.js';
import { findById, calculateTotal } from '../shopping-cart/utils.js';

// const table = document.querySelector('tbody');

// for (let item of cartSkateboards) {
//     const product = findById(item.id, skateboards);
//     const tableRow = renderCartTable(item, product);

//     table.append(tableRow);
// }

// const totalRow = document.querySelector('tr');

// const total = document.createElement('td');

// const totalPrice1 = document.createElement('td');
// const totalPrice = document.createElement('td');

// totalRow.append(total, totalPrice, totalPrice1);

// total.textContent = 'Total';
// totalRow.textContent = `$${calcLineItem(cartSkateboards, skateboards)}`;
// console.log(total);
// table.append(totalRow);

function renderTotalRow() {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td2.textContent = 'Order Total';
    td3.textContent = `$${calculateTotal(cartSkateboards, skateboards)}`;
    tr.append(td1, td2, td3);
    table.append(tr);
}

const table = document.querySelector('tbody');

for (let item of cartSkateboards) {
    const product = findById(item.id, skateboards);
    const tableRowDOM = renderCartTable(item, product);

    table.append(tableRowDOM);
}

renderTotalRow();

