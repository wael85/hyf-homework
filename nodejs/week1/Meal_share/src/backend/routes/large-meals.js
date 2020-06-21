const largMeals =(arr)=>{
  const largMeals = arr.filter(meal=>meal.maxNumberOfGuests > 5);
    return largMeals;
}
exports.largMeals = largMeals;