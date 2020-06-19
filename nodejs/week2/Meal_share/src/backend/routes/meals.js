
//const mealsJson = require('../data/meals.json');
//const reviwes = require('../data/reviews.json');
const meals = (mealsArr,reviwesArr)=>{
    const mealWithReviwes = mealsArr.map(function(meal){
        meal = {...meal,reviwesList:reviwesArr.filter((rev)=>rev.mealId===meal.id)}
          return meal;
    });      
    
    return mealWithReviwes;
}
exports.meals = meals;