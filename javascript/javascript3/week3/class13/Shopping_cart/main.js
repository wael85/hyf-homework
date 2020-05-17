class Product {
    constructor(name, price,img) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}
     const flatscreen = new Product('flat-screen', 5000,"item.jpg");
     const ipad = new Product('ipad', 2000,"item.jpg");
     const watch = new Product('watch', 1000,"item.jpg");
     const mixer = new Product('mixer', 500,"item.jpg");
     const lcd = new Product('lcd', 1500,"item.jpg");
     const apple = new Product('apple', 1500,"item.jpg");
     const snake = new Product('snake', 1500,"item.jpg");
     const zoo = new Product('zoo', 1500,"item.jpg");
     const xray = new Product('xray', 1500,"item.jpg");
     const fatman = new Product('fatman', 1500,"item.jpg");
     const kockis = new Product('kockis', 1500,"item.jpg");
     const condom = new Product('condom', 1500,"item.jpg");
     const viking = new Product('viking', 1500,"item.jpg");
     const bed = new Product('bed', 1500,"item.jpg");
     const nowhere = new Product('nowhere', 1500,"item.jpg");
     const job = new Product('job', 1500,"item.jpg");
     const home = new Product('home', 1500,"item.jpg");
     const google = new Product('google', 1500,"item.jpg");
     const damelife = new Product('damelife', 1500,"item.jpg");
     const ears = new Product('ears', 1500,"item.jpg");
     const woman = new Product('woman', 1500,"item.jpg");
     const room = new Product('room', 1500,"item.jpg");
     const tnt = new Product('tnt', 1500,"item.jpg");
     const you = new Product('you', 1500,"item.jpg");
     const umbrela = new Product('umbrela', 1500,"item.jpg");
     const omg = new Product('omg', 1500,"item.jpg");
     const pepol = new Product('pepol', 1500,"item.jpg");
     const microwav = new Product('Microwav', 2000,"item.jpg");
     const chiar = new Product('chiar', 4000,"item.jpg");

class ShoppingCart {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        this.products.splice(this.products.indexOf(product),1);
    }

    searchProduct(productName) {
        this.products.filter((product)=>{
            product.name == productName;
        })
    }
    getTotal() {
        let total = 0;
        for(let i=0 ; i<this.products.length;i++){
            total += this.products[i].price
        }
        return total;
    }
    renderProducts() {
        const ul = document.querySelector('ul');
        document.querySelector("ul").innerText="";
        this.products.forEach((product)=>{
            const li = document.createElement('li');
            const span = document.createElement('span');
            const button = document.createElement('button');
            button.className = "remove";
            button.innerText = 'x';
            span.innerText = `Prise: ${product.price}`            
            li.innerText = `${product.name}: `
            const remove = li.insertBefore(button,li.childNodes[0]);
            remove.addEventListener('click',()=>{
                ul.removeChild(li);
                this.products.splice(this.products.indexOf(product),1);
                ul.removeChild(ul.lastChild);
                renderTotal();
            })
            li.appendChild(span);
            ul.appendChild(li);
            
        });   
        
        document.getElementById("shopingCart").appendChild(ul);
    }
    getUser(id) {
       let user = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                  .then(res => res.json())
        return user ;
    }
}
//make new shoping cart and add items
const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(flatscreen);
const tv = new Product('TV', 7000);
shoppingCart.addProduct(tv);
shoppingCart.addProduct(microwav);
shoppingCart.addProduct(chiar);
shoppingCart.removeProduct(tv);
let total = shoppingCart.getTotal();

const renderTotal = ()=>{
    const ul = document.querySelector('ul')
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = shoppingCart.getTotal();
    li.innerText= "Total";
    li.appendChild(span);
    ul.appendChild(li);
}
const getUserAndRenderCart = async (id) =>{
    const user = await shoppingCart.getUser(id);
    const shoppingItmes = document.getElementById("shopingCart")
    const h2 = document.querySelector('#shopingCart h2');
    h2.innerText =`Hello ${user.name}`;
    const h3 = document.querySelector('h3');
    h3.innerText ='Your shoping cart:';
    shoppingCart.renderProducts();
    renderTotal();
}
getUserAndRenderCart(2);

let productsArr = [flatscreen,ipad,watch,mixer,lcd,apple,snake,zoo,
    xray,fatman,kockis,condom,viking,bed,nowhere,job,home,google,
    damelife,ears,woman,room,tnt,you,umbrela,omg,pepol,];
const allProducts =document.querySelector(".allProducts");
const renderAllProducts = (arr)=>{
    allProducts.innerText = "";
    arr.forEach((pro)=>{
        const div = document.createElement('div');
        div.className = "product";
        const h2 =document.createElement('h2');
        h2.innerText = pro.name;
        div.appendChild(h2);
        const img = document.createElement('img');
        img.src = pro.img;
        div.appendChild(img);
        const p = document.createElement('p');
        p.textContent = `Price: ${pro.price}`;
        div.appendChild(p);
        const button = document.createElement('button');
        button.innerText = "Add to cart";
        button.className = "addButton";
        const addB = div.appendChild(button);    
        const allProducts = document.querySelector(".allProducts");
        allProducts.appendChild(div);
        addB.addEventListener("click",(e)=>{
            e.preventDefault();
            shoppingCart.addProduct(pro);
            getUserAndRenderCart(2);
        })
    });  
}
renderAllProducts(productsArr); 

// search bar
function autocomplete(inp, arr) {
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var i, val = this.value;        
        if (val=="") {renderAllProducts(productsArr); }
        let matchProduct =[];
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
             matchProduct.push(arr[i]);
          }
        }
        renderAllProducts(matchProduct);
    }); 
  }
  autocomplete(document.getElementById("myInput"), productsArr);
  

