import { findById } from '../utils.js';
export const CART = 'CART';
export const emptyCart = [];




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

export function addToCart(id, input) {
    const cart = getCart();
    const cartItem = findById(cart, id);
    const addQuantity = input;
    
    if (cartItem) {
        cartItem.quantity += addQuantity;
    } else if (addQuantity > 0) {
        const newItem = {
            id: id,
            quantity: addQuantity
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


