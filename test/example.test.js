import { renderSkateboards } from '../products/render-items.js';
import { findById, calcLineItem, calculateTotal } from '../shopping-cart/utils.js';
import { renderCartTable } from '../shopping-cart/render-line-items.js';
import { skateboards } from '../data/data.js';
import { cartSkateboards } from '../shopping-cart/cart.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    const boardTest = {
        id: 'bennett',
        name: 'Bennett Emotional Baggage Deck',
        image: '../assets/bennett-deck.webp',
        description: 'Size: 8.125" Wheelbase: 14"',
        category: 'skateboard',
        price: 55,

    };

    const actual = renderSkateboards(boardTest).outerHTML;

    const expected = `<li id="product-list"><h3>Bennett Emotional Baggage Deck</h3><img src="../assets/bennett-deck.webp"><p>Size: 8.125" Wheelbase: 14"</p><p>skateboard</p><p>$55</p><button id="bennett" value="undefined">Add To Cart</button></li>`;

    expect.equal(actual, expected);
});



test('Function should find an item matching its Id', (expect) => {
    const bennettSkate = {
        id: 'bennett',
        name: 'Bennett Emotional Baggage Deck',
        image: '../assets/bennett-deck.webp',
        description: 'Size: 8.125" Wheelbase: 14"',
        category: 'skateboard',
        price: 55,

    };

    const wimerSkate = 
    {
        id: 'Wimer',
        name: 'Past-Forms',
        image: '../assets/rd_zero-past-forms-wimer-deck_180x.png',
        description: 'Size: 8.25" Wheelbase: 14.25"',
        category: 'skateboard',
        price: 59,

    };

    const dbSkate = 
    {
        id: 'DB',
        name: 'DB Longboards Pioneer',
        image: '../assets/DB-Longboards-Pioneer-deck.webp',
        description: 'Components: Cloud Ride Cruiser 69mm 78a wheels, Cloud Ride bearings',
        category: 'longboard',
        price: 189,
    };

    const skateArray = [bennettSkate, wimerSkate, dbSkate];

    const id = 'Wimer';
    const actual = findById(skateArray, id);
    const expected = wimerSkate;
    
    expect.equal(actual, expected);
});



test('function should take in the quantity and price of the item in the cart and return the total', (expect) => {
    const quantity = 3;
    const price = 59;
    
    const expected = 177;
    const actual = calcLineItem(quantity, price);

    expect.equal(actual, expected);
});



test('function should generate a table row based on the items the user puts in their cart', (expect) => {
    const cartItem = {
        id: 'DB',
        name: 'DB Longboards Pioneer',
        price: 189,
        quantity: 1,
        total: 189,
    };
    const expected = '<tr><td>DB Longboards Pioneer</td><td>$189</td><td>1</td><td>$189</td></tr>';

    const actual = renderCartTable(cartItem);

    expect.equal(actual.outerHTML, expected);
});



test('given a cart arr and garment arr, return order total for cart', (expect) => {
    const expected = 484;

    const actual = calculateTotal(cartSkateboards, skateboards);
    
    expect.equal(actual, expected);

})