const express = require('express');
const app = express();
app.get('/calculator/:method',(req,res)=>{
    const firstParm =parseInt(req.query.firstParm);
    const secoundParm =parseInt(req.query.secoundParm);
    const method = req.params.method;
    let result;
    let methods = ['add','subtrac','multiply','divid'];
    if (methods.indexOf(method)<0){
       res.send('Somthing wrong!! check your input')
    }else{
         if (method === 'add'){
            result = firstParm + secoundParm;       
         }
         if (method === 'subtrac'){
             result = firstParm - secoundParm;
         }
         if (method === 'multiply'){
              result = firstParm * secoundParm;
             
         }
         if (method === 'divid'){
              result = firstParm / secoundParm;
         }

         res.send(`Result is: ${result}` );
    }

    
});
app.listen(3000);