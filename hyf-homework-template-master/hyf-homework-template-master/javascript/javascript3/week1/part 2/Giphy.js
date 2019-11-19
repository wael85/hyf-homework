
const search = document.getElementById("searchForm");
const searchWord = document.getElementById("searchWord");
const gifs = document.querySelector('.gife');
search.addEventListener('submit',function(event){
    event.preventDefault();
    
    const url ="https://api.giphy.com/v1/gifs/search?api_key=f9uVesaIcKrj71Ln2orFHe6pVfVIabtO&q="+searchWord.value+"&limit=&offset=0&rating=G&lang=en";
    
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let arr = response.data ;
        gifs.innerText = '';
        arr.forEach(element => {
        const img = document.createElement('img');
            img.src= element.images.fixed_width.url ;

            gifs.appendChild(img);
            
        });
    });
})

const numberOfGife = document.querySelector('#nrOfGif');
numberOfGife.addEventListener('input',function(event){
    event.preventDefault();
    const url = "https://api.giphy.com/v1/gifs/search?api_key=f9uVesaIcKrj71Ln2orFHe6pVfVIabtO&q="+searchWord.value+"&limit="+numberOfGife.value+"&offset=0&rating=G&lang=en"
    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        let arr = response.data ;
        gifs.innerText = '';
        arr.forEach(element => {
        const img = document.createElement('img');
            img.src= element.images.fixed_width.url ;

            gifs.appendChild(img);
            
        });
    });
})

