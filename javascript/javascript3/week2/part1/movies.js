fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
.then(response => response.json())
.then(response =>{
    console.log(response);
    let badMovies = response.filter(obj=> obj.rating <= 6);
    console.log(badMovies);
    let badMovis200 = response.filter(obj => obj.rating <= 6 && obj.year >= 2000);
    console.log(badMovis200);
    let titles = badMovis200.map(obj => obj.title);
    console.log(titles);
}
  

);
