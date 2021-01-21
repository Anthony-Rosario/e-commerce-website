import { findById } from '../shopping-cart/utils.js';
import { skateboards } from '../data/data.js';



export function renderCartTable(cartItem) {
    const tr = document.createElement('tr');
    const itemTd = document.createElement('td');
    const priceTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const totalTd = document.createElement('td');

    
    const skateboardItem = findById(skateboards, cartItem.id);
    
    const itemName = skateboardItem.name;
    itemTd.textContent = itemName;
    
    const price = skateboardItem.price;
    priceTd.textContent = `$${price}`;
    
    quantityTd.textContent = cartItem.quantity;
    
    const total = price * cartItem.quantity;
    totalTd.textContent = `$${total}`;
    
    tr.append(itemTd, priceTd, quantityTd, totalTd);

    return tr;
    
}
