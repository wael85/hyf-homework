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
const reservOfId =require('./routes/reservation')
app.get('/meals-with-reviwes',(req,res)=>{
    res.send(mealsWithreviwes.meals(meals,reviews));
});
app.get('/cheap-meals',(req,res)=>{
    res.send(cheapMeals.cheapMeals(mealsWithreviwes.meals(meals,reviews)));
});
app.get('/large-meals',(req,res)=>{
    res.send(largMeals.largMeals(mealsWithreviwes.meals(meals,reviews)));
});
app.get('/meal',(req,res)=>{
    res.send(mealOfId.mealOfId(mealsWithreviwes.meals(meals,reviews),2));
});
app.get('/reservations',(req,res)=>{
    res.send(reservations);
});
app.get('/reservation',(req,res)=>{
    res.send(reservOfId.reservOfId(reservations,1));
});
app.listen(8000);