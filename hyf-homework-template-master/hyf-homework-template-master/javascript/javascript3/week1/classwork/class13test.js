
const list = document.querySelector(".list");
const result = fetch('http://api.open-notify.org/astros.json')
.then(res => res.json())
.then(res => {
    console.log(res);
    const people = res.people;
    console.log("people",people);
    
   list.innerHTML=`<dt>There are ${res.number} astronauts in space, they are:</dt>`
      people.forEach(element => {
        const dd = document.createElement("dd");
           dd.innerText = element.name;
           list.appendChild(dd);
    
          });   
     });




const dog = document.querySelector(".Dog");
setInterval(()=>{
    fetch(" https://dog.ceo/api/breeds/image/random")
    .then(res=> res.json())
    .then(res => {
        // clean the section pefor inner another img
        dog.innerText="";
        const img = document.createElement("img");
        img.src =res.message;
        dog.appendChild(img);
    
     });
     console.log("fer");
},3000);


// select div with the class Dog
const dogs = document.querySelector(".Dogs");

    fetch(" https://dog.ceo/api/breeds/list/all")
    .then(res=> res.json())
    .then(res => {
        console.log(res);
        //get all the kes from the object message and put it in array
        const bread = Object.keys(res.message) ;
        console.log("sdf",bread)
        bread.forEach(element => {
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            fetch(` https://dog.ceo/api/breed/${element}/images/random`)
                .then(res=> res.json())
                .then(result =>{
                    img.src =result.message;
                    dogs.appendChild(img);
                    h2.innerText=element;
                    dogs.appendChild(h2);
                })
            
        });
        
     });
 