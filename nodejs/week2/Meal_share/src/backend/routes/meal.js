const mealOfId = (arr,id)=>{
    const meal = arr.filter(obj =>obj.id==id);
    return meal;
}
exports.mealOfId = mealOfId;