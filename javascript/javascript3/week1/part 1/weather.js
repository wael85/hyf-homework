
function createLineInfo(texet,responseDetailes){
    const info = document.querySelector('.info ul');
    const li= document.createElement('li');   
    const detailes = info.appendChild(li);        
    detailes.innerText = texet+ responseDetailes;
}


function creatImag(src1){
    const info = document.querySelector('.info ul');
    const img= document.createElement('img');
    img.src = src1;
    const imag= info.appendChild(img);

}
function timeFunctiom(sunInMilesecound){
    let date =new Date((sunInMilesecound)*1000); 
    let sunrise = date.getHours()+':'+date.getMinutes()+'AM';
    return sunrise;
}
let map;




fetch('http://api.openweathermap.org/data/2.5/weather?q=odense&APPID=cd29fbb21f74d44498bb8722dc34aa98')
     .then(response => response.json())
     .then(weatherObj =>{
         console.log(weatherObj);
         let src1 ='http://openweathermap.org/img/w/' +  weatherObj.weather[0].icon +'.png';
        
          
         createLineInfo('City name: ',weatherObj.name);
         createLineInfo('Temperture: ',weatherObj.main.temp);
         createLineInfo('Weather typ: ','');
         creatImag(src1);
         createLineInfo('Wind speed: ',weatherObj.wind.speed);
         createLineInfo('cloudy status: ',weatherObj.clouds.all);
         createLineInfo('Sunrise: ',timeFunctiom(weatherObj.sys.sunrise));
         createLineInfo('Sunset: ',timeFunctiom(weatherObj.sys.sunset));
         let coordes ={
             zoom : 8,
             lat : weatherObj.coord.lat,
             lng :weatherObj.coord.lon
         }
        
    
     });
    

   