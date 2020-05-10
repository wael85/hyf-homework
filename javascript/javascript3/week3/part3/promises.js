
const ul1 = document.querySelector('.ul1');
const wael = fetch("https://api.github.com/search/repositories?q=user:wael85").then(res=>res.json());
const merhawi = fetch("https://api.github.com/search/repositories?q=user:Merhawi-gebreslasie").then(res=>res.json());
const elshawa = fetch("https://api.github.com/search/repositories?q=user:m-elshawa").then(res=>res.json());
Promise.all([wael,merhawi,elshawa])
.then(response => innerRes(response));



function innerRes(response){
    response.forEach(elm =>{ 
       const li = document.createElement('li');
       const ul = document.createElement('ul');
       const info = ul1.appendChild(li);
       info.innerText=elm.items[0].owner.login+"'s repositories";
       const reposit = info.appendChild(ul);

       elm.items.forEach( repo => {
          const li2 = document.createElement('li')
          const info2 = reposit.appendChild(li2);
          info2.innerText=repo.name +": "+ repo.url ;
        
        });
     });
}

