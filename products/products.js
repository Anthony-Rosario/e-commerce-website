import { renderSkateboards } from '../products/render-items.js';
import { skateboards } from '../data/data.js';
import { cartSkateboards } from '../data/cart.js';

const productsList = document.getElementById('product-list');

for (const skateboard of skateboards) {
    const newDeck = renderSkateboards(skateboard);
    productsList.append(newDeck);
}

