//const meals = require('../data/meals.json');

const cheapMeals = (arr)=>{
    const cheapMeals = arr.filter(meal => meal.price<70);
    return cheapMeals
}
exports.cheapMeals = cheapMeals;