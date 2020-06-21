const express = require('express');
const app = express();
const meals = require('./data/meals.json');
const reservations = require('./data/reservations.json');
const reviews = require('./data/reviews.json');
//methods from routes
const mealsWithreviwes = require('./routes/meals');
const cheapMeals = require('./routes/cheap-meals');
const largMeals = require('./routes/large-meals');
const mealOfId = require('./routes/meal');
const reservOfId =require('./routes/reservation');
app.get('/meals',(req,res)=>{
    const mealsWithreviwesArr = mealsWithreviwes.meals(meals,reviews);
    const maxPrice =parseInt(req.query.maxPrice);
    const title =req.query.title;
    const createdAfter =Date.parse(req.query.createdAfter) ;
    const limit =parseInt(req.query.limit);
    if(maxPrice){
        if(!isNaN(maxPrice)){
            res.send(mealsWithreviwesArr.filter(meal=>meal.price <= maxPrice))
        }else{
            res.send('The max price is not valid!!');
        }
    } 
    if(title){
        //needs more work
        res.send(mealsWithreviwesArr.find(meal=>meal.title.includes(title)));   
    }
    if(createdAfter){
        res.send(mealsWithreviwesArr.filter(meal => Date.parse(meal.createdAt)>createdAfter));
    }
    if(limit){
        res.send(mealsWithreviwesArr.slice(0,limit))
    }
    else{
        res.send(mealsWithreviwesArr);  
    }  
});
app.get('/cheap-meals',(req,res)=>{
    res.send(cheapMeals.cheapMeals(mealsWithreviwes.meals(meals,reviews)));
});
app.get('/large-meals',(req,res)=>{
    res.send(largMeals.largMeals(mealsWithreviwes.meals(meals,reviews)));
});
app.get('/meals/:id',(req,res)=>{
     const id = parseInt(req.params.id);
        if (!isNaN(id)){            
            if (0 < id && id <= meals.length){
                res.send(mealOfId.mealOfId(mealsWithreviwes.meals(meals,reviews),id)); 
            }else{
                res.send('The id is not exist!!');
            }
        }else{
            res.send('The id is not valid!!');
        }
    }
);       
app.get('/reservations',(req,res)=>{
    res.send(reservations);
});
app.get('/reservations/:id',(req,res)=>{
    const id = parseInt(req.params.id);
        if (!isNaN(id)){            
            if (0 < id && id <= reservations.length){
                res.send(reservOfId.reservOfId(reservations,id)); 
            }else{
                res.send('The id is not exist!!');
            }
        }else{
            res.send('The id is not valid!!');
        }    
});
app.get('/reviews',(req,res)=>{
    res.send(reviews);
});
app.get('/reviews/:id',(req,res)=>{
    const id = parseInt(req.params.id);
        if (!isNaN(id)){            
            if (0 < id && id <= reviews.length){
                const review= reviews.find(rev=>rev.id == id);
                return review; 
            }else{
                res.send('The id is not exist!!');
            }
        }else{
            res.send('The id is not valid!!');
        }    
});
app.listen(8000);