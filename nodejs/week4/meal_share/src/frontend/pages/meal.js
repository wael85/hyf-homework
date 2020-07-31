window.handleMealRequest = params=> {
  document.body.innerHTML = `
  <h1>Meal with id ${params.id}</h1>


  <style>
  header{
    width: 100%;
    height: 300px;
}
#head{
    position: relative;
    left: 0px;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0px;
}
main{
    border: solid black 1px;
    height: 100vh;
}
main{
  height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
}
.form-div{
  margin-top : 15pxpx
  
}
img{
   position: relative;
   width: 90%;
   height : 200px;
   margin-bottom : 15px;

}

footer{
    text-align: center;
}
h3{
    color: maroon;
    opacity:0.9;
}
nav{
  display: flex;
  align-items: flex-start;
  height : 30px;
  position: relative;
   bottom: 10%;
   width :100%;
   background : lightgray;
   opacity : 0.8;

}
.nav-a{
  margin-left: 10%;
 margin-top :auto;
  color: blac;
  text-decoration: none;
  opacity : 0.9;
  height : 100%
  vertical-align: middle;
}
ul{
  list-style: none;
  width : 40%
}
a:hover{
  color : blue;
}
#first{
  opacity :1;
}
#meal_id,#created_date{
  display : none;
}
</style>
<header>
   <img id = "head" src="../background.jpg" alt="" srcset="">
   <nav>
        <a class = "nav-a" href="../">Home</a>
        <a class = "nav-a" href="">Rescervation</a>
        <a class = "nav-a" href="">Reviws</a>
        <a class = "nav-a" href="">About us</a>
    </nav>
</header>
<main class="meal">
   <div style="width : 40% ; margin-left: 10px;">
        
           <div class = "form-div">
            <label for="full-name">Full name</label>
            </div>
            <div class = "form-div">
            <input type="text" id="name" >
           </div> 
           <div class = ".form-div">
            <label for="number_of">Guests</label>
            </div>
            <div class = "form-div">
            <input type="number" id= "number_of_guests" >
          </div>
          <div class = ".form-div">
          <button id = "sub-b">Reservation</button>
            </div>
         
   </div>
        
</main>
<footer>
  <h3>Ali baba best food in Estonia.for more info pleass contact on: <br> Mobil. 29920518 Email. dr.wael85@gmail.com</h3>
</footer>
  <script>
  
  </script>
  
  `;
  let mealTitle;
  fetch(`/api/meals/${params.id}`)
  .then(res => res.json())
  .then(respons=> {
    let res = respons[0];
    mealTitle = res.title;
    const meal = document.querySelector(".meal");
    const ul = document.createElement('ul');
        const img = document.createElement('img');
        if(!res.img){
          img.src ='../nopic.jpg';
        }else{
          const arrayBufferView = new Uint8Array( res.img.data );
          const blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
          const urlCreator = window.URL || window.webkitURL;
          const imageUrl = urlCreator.createObjectURL( blob );        
          img.src = imageUrl;
        }
        const title = document.createElement('li');
        title.innerText = res.title;
        const description = document.createElement('li');
        description.innerText = res.description;

        const back = document.createElement('li');
        back.innerHTML = `<input type=button onClick="location.href='../meals'" value='Back to menu'></input>`      
        ul.appendChild(img)
        ul.appendChild(title);
        ul.appendChild(description);
        ul.appendChild(back);
        meal.appendChild(ul);
       const submitB = document.getElementById("sub-b");
       console.log(submitB)
       submitB.addEventListener("click",function(e){
         e.preventDefault();
        const name = document.getElementById("name");
        const guests = document.getElementById("number_of_guests");
        let dato = Date.now();
        console.log(new Date(dato).toISOString().replace("T"," "));
        fetch("/api/reservation",{
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'applinew Date(dato)cation/x-www-form-urlencoded',
          },
          body : JSON.stringify({
            "number_of_guests" : guests.value,
            "full_name ": name.value,
            "meal_id" : params.id,
            "created_date" : new Date(dato).toISOString().replace("T"," ").substring(0,20)
            
          }) 
        }).then(res2 => res2.json())
        .then((res3) => {
           meal.innerHTML=`<div class = "sucsses">
           <h2>Tanks for your reservation</h2><p>You sucsessfuly book 
           <span>${mealTitle}</span>
            on referanc number ${res3[0]}</p>
            <input type=button onClick="location.href='../meals'" value='Back to menu'></input>
            </div>`;
          })
          
        
       });
      
  })
  
};
