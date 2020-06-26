const express = require('express');
const app = express();
app.use(express.json());
app.post('/calculator',(req,res)=>{
    req.body = {
        firstParm : parseInt(req.query.firstParm),
        secoundParm : parseInt(req.query.secoundParm),
        method : req.query.method        
    }
    const method = req.body.method;
    console.log(req.body);
    let result;
    let methods = ['add','subtrac','multiply','divid'];
    if (methods.indexOf(method)<0){
       res.send('Somthing wrong!! check your input')
    }else{
         if (method == 'add'){
            result = req.body.firstParm + req.body.secoundParm;       
         }
         if (method === 'subtrac'){
             result = req.body.firstParm - req.body.secoundParm;
         }
         if (method === 'multiply'){
              result = req.body.firstParm * req.body.secoundParm;
             
         }
         if (method === 'divid'){
              result = req.body.firstParm / req.body.secoundParm;
         }

         res.send(`Result is: ${result}` );
    }

    
});
app.listen(3000);