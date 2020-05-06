const exe1 = async(url)=>{
    
    try{
        const res = await fetch(url)
        const result = await res.json()
        console.log(result)
    }catch(e){
        console.log(e)
    }
    

}
exe1("https://yesno.wtf/api");
exe1("https://knajskdskj.jasdk");

const myEvent = (age)=> {
    return new Promise ((resolve,reject)=>{
    if (age > 17){
        
        resolve("Welcom to our event!!")
    }else{
        reject("You are not alowed to this event")
    }
})
}
myEvent(14)
.then(res => console.log(res))
.catch(e=>console.log(e));
myEvent(18)
.then(res => console.log(res))
.catch(e=>console.log(e))



let num = Math.floor(Math.random() * 10);
console.log(num);
const getLoginUsers = (num)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (num < 5){
                resolve(["wael","Kaj","Roni"])
            }else{
                reject("undefinded error")
            }
        },5000)
        
    })

}
getLoginUsers(num)
.then(res=> console.log(res))
.catch(e=>console.log(e))



fetch("http://api.open-notify.org/astros.json")
.then(res=>res.json())

.then((res)=>{
    console.log(res)
     return fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")})
.then(res => res.json())
.then(res => console.log(res))
.catch(e=>console.log(e))



const promise1 = fetch("http://api.open-notify.org/astros.json");
const promise2 = fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json");
Promise.all([promise1,promise2])
.then(res=>{
    const result = res.map(r => r.json())
    return Promise.all(result)
})
.then(res => console.log("new res", res))