export function findById(array, id) {
    for (let element of array){
        if (element.id === id) {
            return element;
        }
    }
}