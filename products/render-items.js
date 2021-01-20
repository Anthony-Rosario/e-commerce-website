export function renderSkateboards(skateboards){
    const li = document.createElement('li');
    li.id = 'product-list';

    const h3 = document.createElement('h3');
    h3.textContent = skateboards.name;
    li.append(h3);

    const img = document.createElement('img');
    img.src = skateboards.image;
    li.append(img);

    const pDescription = document.createElement('p');
    pDescription.textContent = skateboards.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.textContent = skateboards.category;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.textContent = `$${skateboards.price}`;
    li.append(pPrice);
    
    const addButton = document.createElement('button');
    addButton.id = 'bennett-deck';
    addButton.value = skateboards.code;
    addButton.textContent = 'Add To Cart';
    li.append(addButton);
    
    return li;
}