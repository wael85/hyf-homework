window.handleMealsRequest = () => {
  document.body.innerHTML = `<style>
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
    justify-content: space-around;
}
div{
    height: 400px;
    width:300px ;           
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
a:hover{
  color : blue;
}
#first{
  opacity :1;
}
</style>
<header>
   <img id = "head" src="background.jpg" alt="" srcset="">
   <nav>
       <a class = "nav-a" href="../">Home</a>
       <a class = "nav-a" href="">Rescervation</a>
       <a class = "nav-a" href="">Reviws</a>
       <a class = "nav-a" href="">About us</a>
    </nav>
</header>
<main class="main-menu">

</main>
<footer>
  <h3>Ali baba best food in Estonia.for more info pleass contact on: <br> Mobil. 29920518 Email. dr.wael85@gmail.com</h3>
</footer>`;
  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then(response => response.json())
    .then(meals => {
      console.log(meals);
      let mainMenu = document.querySelector(".main-menu");
      meals.forEach(meal => {
        const div = document.createElement('div');
        div.className = "meal";
        const ul = document.createElement('ul');
        const img = document.createElement('img');
        if(!meal.img){
          img.src ='nopic.jpg';
        }else{
          const arrayBufferView = new Uint8Array( meal.img.data );
          const blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
          const urlCreator = window.URL || window.webkitURL;
          const imageUrl = urlCreator.createObjectURL( blob );        
          img.src = imageUrl;
        }
        const title = document.createElement('li');
        title.innerText = meal.title;
        const description = document.createElement('li');
        description.innerText = meal.description;

        const button  = document.createElement('div');
        button.innerHTML= `<input type=button onClick="location.href='../meal/${meal.id}'" value='Back to menu'>`;           
        ul.appendChild(img)
        ul.appendChild(title);
        ul.appendChild(description);
        div.appendChild(ul);
        div.appendChild(button);
        mainMenu.appendChild(div);
        div.className="meal-div";
       
        
      });
    })
};
