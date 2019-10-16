console.log('Script loaded');
const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
const ulProduct = document.querySelector('.products ul');
console.log(ulProduct);
function renderProducts(products){
    for(i = 0 ; i < products.length ; i++){
        //creat li for the procuct opject
        let li = document.createElement('li');
        ulProduct.appendChild(li);
        // creat ul inside the product 
              let ulEachproduct =document.createElement('ul');
              li.appendChild(ulEachproduct);
              // creat an li for the name of the product and render it  
              let liName = document.createElement('li');
              ulEachproduct.appendChild(liName);
              liName.innerText = products[i].name;
              // creat an li for the price of the product and render it 
              let liPrice = document.createElement('li');
              ulEachproduct.appendChild(liPrice);
              liPrice.innerText = products[i].price;
              // creat an li for the rating of the product and render it 
              let liRating = document.createElement('li');
              ulEachproduct.appendChild(liRating);
              liRating.innerText = products[i].rating;
              // creat an li for the shipsTo of the product and render it 
              let ulShipsTo = document.createElement('ul');
             ulEachproduct.appendChild(ulShipsTo);
                       let shipscountries = products[i].shipsTo;
                       console.log(shipscountries);
                       shipscountries.forEach(x => {
                        let liShipsTo = document.createElement('li');
                        ulShipsTo.appendChild(liShipsTo);
                         liShipsTo.innerText= x;
                           
                       });
                           

                     
    }

}
const products = getAvailableProducts();
renderProducts(products);



