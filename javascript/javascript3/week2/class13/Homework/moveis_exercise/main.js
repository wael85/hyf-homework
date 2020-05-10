//Movies API
/*
const allMovies = async ()=>{
     const getMovies = await fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
     const moviesArray = await getMovies.json();
     console.log("All movies",moviesArray);
     const badMovies = moviesArray.filter(movie => movie.rating < 5 );
     console.log("bad movies",badMovies);
     const badMoviesAfter2000 = badMovies.filter(movie => movie.year >= 2000);
     console.log("Bad movies after 2000",badMoviesAfter2000)
}
allMovies();*/

// Promise that resolves after set time
/*const restartAfter = (num)=>{
     return new Promise ((resolve , reject)=>{
       setTimeout (()=>{
         resolve("here")
       },num * 1000);
     });
}
restartAfter(8).then(()=>console.log('I am called asynchronously'));
async function myfunction(num){
  const resolv = await restartAfter(num);
  console.log('I am called asynchronously');
}
myfunction(1);*/

//rewrite time
/*const setTime = (time)=>{
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${time}`);
    },time * 1000)
  });
}
setTime(2)
.then((res)=>console.log(`Called after ${res} seconds`))*/


const getPosition =  ()=> {
  return new Promise( (resolve, reject)=> {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
async function mylocation(){
  try{const location = await getPosition();
    console.log (location);
  }catch (e){
    console.log(e)
  }
}
mylocation();
