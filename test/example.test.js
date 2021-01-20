import { renderSkateboards } from '../products/render-items.js';

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
