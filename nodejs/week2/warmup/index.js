const express = require('express');
const app = express();

app.get('/add/:first/:secound',(req,res)=>{
     const first = parseInt(req.params.first) ; 
     const secound = parseInt(req.params.secound);
     if (!isNaN(first) && first <100 && !isNaN(secound) && secound<100 ){
        let sum = first + secound;
        res.send(`The result: ${sum}`);
     }else{
         res.send('The value you  interd should not be more than 100 and be number');

     }
});
app.get('/multiply',(req,res)=>{
    const first =parseInt(req.query.first)  ; 
    const secound = parseInt(req.query.secound);
    if (!isNaN(first) && first <100 && !isNaN(secound) && secound<100 ){
       let mult = first * secound;
       res.send(`The result: ${mult}`);
       console.log(res,req);
    }else{
        res.send('The value you  interd should not be more than 100 and be number');
        
    }
});
app.listen(3000);