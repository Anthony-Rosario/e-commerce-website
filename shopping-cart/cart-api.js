export const CART = 'CART';
export const emptyCart = [];
import { findById } from '../utils.js';




export function getCart() {
    const mockCart = localStorage.getItem(CART);

    if (mockCart) {
        const parsedCart = JSON.parse(mockCart);
        return parsedCart;
    } else {
        const mockDefaultCart = JSON.stringify(emptyCart);

        localStorage.setItem(CART, mockDefaultCart);
        return mockDefaultCart;
    }
}

export function addToCart(id) {
    const cart = getCart();
    const cartItem = findById(cart, id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}

export function setCart(cart) {
    const mockCart = JSON.stringify(cart);
    localStorage.setItem(CART, mockCart);
}


export function clearCart() {
    const mockCart = JSON.stringify(emptyCart);
    localStorage.removeItem(CART, mockCart);
}


