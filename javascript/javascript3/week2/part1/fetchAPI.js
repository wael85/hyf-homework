/*fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462",{"method":"Get",
    "headers" : {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "c8e2bfc522mshec57131bb391076p11f2e9jsnb860a241cc3e"
    }
}).then(res =>res.json())
.then(res => console.log(res))
.catch(err => console.log(err));*/
fetch("https://gorest.co.in/public-api/users?_format=json&access-token=n-cz08d9yo-arcU22EJo5pHNwNTWnaGCesHU")
.then(response =>response.json())
.then((response)=> {
    console.log('wait')
    setTimeout(() => {
        console.log(response);
        console.log( response.result.filter(opj=>opj.gender ==="female")) ;
    }, 5000);
	
})



.catch(err => {
	console.log(err);
});