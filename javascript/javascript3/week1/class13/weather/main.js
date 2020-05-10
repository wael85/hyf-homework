const info = document.querySelector('.info');
const weatherByLocation = document.getElementById("weatherByLocation");
const map1 = document.querySelector("#mapid");

let coords =getCoords();
function getCoords(){
    let coords ={};
    navigator.geolocation.getCurrentPosition((pos)=>{
    coords.lat =  pos.coords.latitude;
    coords.lon = pos.coords.longitude ;})
    return coords;
}

function createLineInfo(texet,responseDetailes){
    
    const li= document.createElement('li');   
    const detailes = info.appendChild(li);        
    detailes.innerText = texet+ responseDetailes;
}
function creatImag(src1){
    
    const img= document.createElement('img');
    img.src = src1;
    info.appendChild(img);

}
function timeFunctiom(sunInMilesecound){
    let date =new Date((sunInMilesecound)*1000); 
    let sunrise = date.getHours()+':'+date.getMinutes();
    return sunrise;
}
let form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    info.innerText="";
    map1.innerText ="";
    let city = document.getElementById("city");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=ac21a973fe373b1f37046bc82efbc3f8`
    fetchURL(url);
    city.value="";
    map();

    
})

 
function fetchURL(url){
    fetch(url)
    .then(response => response.json())
    .then(weatherObj =>{
        coords.lat =  weatherObj.coord.lat;
        coords.lon = weatherObj.coord.lon;
        if (weatherObj.cod <400){
            let src1 ='http://openweathermap.org/img/w/' +  weatherObj.weather[0].icon +'.png';
       
         
            createLineInfo('Temperture: ',weatherObj.main.temp);
            createLineInfo('City name: ',weatherObj.name);
            createLineInfo('Weather typ: ','');
            creatImag(src1);
            createLineInfo('Wind speed: ',weatherObj.wind.speed);
            createLineInfo('cloudy status: ',weatherObj.clouds.all);
            createLineInfo('Sunrise: ',timeFunctiom(weatherObj.sys.sunrise));
            createLineInfo('Sunset: ',timeFunctiom(weatherObj.sys.sunset));
            
                    
            }else{
                info.innerText= weatherObj.message;
            }
       
   
    });
}
function getWeatherByLocation(coords){
     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=ac21a973fe373b1f37046bc82efbc3f8`
     fetchURL(url);
     
}
weatherByLocation.addEventListener("click",()=>{
    info.innerText="";
    map1.innerText="";

     getWeatherByLocation(coords);
     map();
});
    
   
   function map(){
     mymap = L.map('mapid').setView([coords.lat, coords.lon], 13);
   }

   let mymap = L.map('mapid').setView([50, 4], 13);

   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
    }).addTo(mymap);



     
       
    



