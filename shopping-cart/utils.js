export function findById(array, id) {
    for (const element of array){
        if (element.id === id) {
            return element;
        }
    }
}


export function calcLineItem(quantity, amount) {
    return quantity * amount;
}


export function calculateTotal(cart, skateboards) {
    let total = 0;

    for (const cartItem of cart) {
        let boardPrice = findById(skateboards, cartItem.id).price;
        let cartItemPrice = calcLineItem(cartItem.quantity, boardPrice);
        total += cartItemPrice;
    }
    return total;
}
