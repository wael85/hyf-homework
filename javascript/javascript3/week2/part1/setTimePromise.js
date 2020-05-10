function myfunction(resolveAfter){
     return new Promise(resolve=>{
     setTimeout(()=>{
         resolve();
     },resolveAfter*1000); 
    });
    

}
myfunction(3)
.then((res) =>console.log('.I am called asynchronously after 6 seconds.'));





