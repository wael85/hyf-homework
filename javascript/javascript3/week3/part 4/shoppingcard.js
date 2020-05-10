class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    convertToCurrency(currency){
        const currencyObj = {
            kroner: () => this.price,
            usd:() => this.price * 0.14745 ,
            php: () => this.price * 7.50944,
            pound: () => this.price * 0.11490,
            euro: () => this.price * 0.13382
        };
        return currencyObj[currency]();
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // Implement functionality here
        this.products.push(product);
    }

    removeProduct(product) {
        // Implement functionality here
      for (let i=0; i<this.products.length;i++){
          if (this.products[i].name === product.name){
              this.products.splice(i,1);
              break;
          }
              
          }
      }

    searchProduct(productName) {
        // Implement functionality here
        let arr = [];
        for (let i=0; i<this.products.length;i++){
            if (this.products[i].name === productName){
                console.log(this.products[i]);
                arr.push(this.products[i]);
            }
        }
        return arr ;
    }

    getTotal() {
        // Implement functionality here
        let total=0 ;
        for (let i=0; i<this.products.length;i++){
            //console.log(this.products[i].price);
            total += this.products[i].price;
            }  
        
        return total ;
        
    }

    renderProducts() {
        // Implement functionality here
        products.innerText= '';
        total.innerText = '';
       
        shoppingCart.getUser().then(res => {
            user.innerText = res.name;
        });
        this.products.forEach(product=> {
             const li = document.createElement('li');
             const pro = products.appendChild(li);
            // creat contaner for li and button
            const divA = document.createElement('div');
            const divB = document.createElement('div')
            const diva = pro.appendChild(divA);
            diva.classList.add('diva');
            const divb = pro.appendChild(divB);
            divb.classList.add('divb');
            diva.innerText =product.name+':   '+product.price+' kr';
            total.innerText = 'The total is:  '+shoppingCart.getTotal();
            //create remove item button
                 const button = document.createElement('button');
                 const p =divb.appendChild(button);
                 p.classList.add('remove');
                 p.innerText = 'X';
                 p.addEventListener('click',function(event){
                     event.preventDefault()
                     products.removeChild(li);
                     //products.removeChild(button);
                     shoppingCart.removeProduct(product);
                     total.innerText = '';
                     total.innerText= 'The total is:  '+shoppingCart.getTotal();
                  });
        });
        
        
    }

    getUser() {
        // Implement functionality here
        
       let user = fetch( "https://jsonplaceholder.typicode.com/users/1")
        .then(res => res.json());
            return user;
    }
}

// products name
     const flatscreen = new Product('flat-screen', 5000);
     const ipad = new Product('ipad', 2000);
     const watch = new Product('watch', 1000);
     const mixer = new Product('mixer', 500);
     const lcd = new Product('lcd', 1500);
     const apple = new Product('apple', 1500);
     const snake = new Product('snake', 1500);
     const zoo = new Product('zoo', 1500);
     const xray = new Product('xray', 1500);
     const fatman = new Product('fatman', 1500);
     const kockis = new Product('kockis', 1500);
     const condom = new Product('condom', 1500);
     const viking = new Product('viking', 1500);
     const bed = new Product('bed', 1500);
     const nowhere = new Product('nowhere', 1500);
     const job = new Product('job', 1500);
     const home = new Product('home', 1500);
     const google = new Product('google', 1500);
     const damelife = new Product('damelife', 1500);
     const ears = new Product('ears', 1500);
     const woman = new Product('woman', 1500);
     const room = new Product('room', 1500);
     const tnt = new Product('tnt', 1500);
     const you = new Product('you', 1500);
     const umbrela = new Product('umbrela', 1500);
     const omg = new Product('omg', 1500);
     const pepol = new Product('pepol', 1500);
// make new shopping card 
     const shoppingCart = new ShoppingCart([]);
//add items to the shopping card
     //shoppingCart.addProduct(flatscreen);
     //shoppingCart.addProduct(ipad);
     //shoppingCart.addProduct(watch);
// remove items from shopping card
     //shoppingCart.removeProduct(flatscreen);
// searching in shoping card
     //shoppingCart.searchProduct('flat-screen');
// avalble products
let productsArr = [flatscreen,ipad,watch,mixer,lcd,apple,snake,zoo,
    xray,fatman,kockis,condom,viking,bed,nowhere,job,home,google,
    damelife,ears,woman,room,tnt,you,umbrela,omg,pepol];
// selecting sections on HTML file      
      const user = document.querySelector('.user')
      const total = document.querySelector('.total');
      const products = document.querySelector('.products');
      const searching = document.getElementById('search')
//post the user name ,products and the total price
     //shoppingCart.renderProducts();
     

// search pox
   searching.addEventListener('input',function(){
       console.log(searching.value);
   });
 
// call convert function wwith eur currency
console.log(lcd.convertToCurrency('euro'));
   