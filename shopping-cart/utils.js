export function findById(array, id) {
    for (const element of array){
        if (element.id === id) {
            return element;
        }
    }
}


export function calcLineItem(quantity, amount) {
    const total = quantity * amount;
    return Math.round(total * 100) / 100;
}




