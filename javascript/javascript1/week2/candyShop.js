let boughtCandyPrices = [];
function addCandy(candyType,weight){
  if (candyType == "Sweet"){
   return boughtCandyPrices.push(weight * 0.5);
  }
  else if (candyType == "Chocolate"){
   return boughtCandyPrices.push(weight * 0.7);
  }
  else if (candyType == "Toffe"){
    return boughtCandyPrices.push(weight * 1.1);
  }
  else if (candyType == "Chewing-gum"){
    return boughtCandyPrices.push(weight * 0.03);
  }
}
addCandy("Sweet",20);
addCandy("Chocolate",10);
addCandy("Toffe",30);
addCandy("Chewing-gum",5);
 let totalPrice = 0;
for (i=0 ; i < boughtCandyPrices.length ; i++){
    totalPrice += boughtCandyPrices[i];
}
console.log(totalPrice);

var amountToSpend = Math.floor(Math.random() * 100); 
console.log(amountToSpend);

  if (totalPrice < amountToSpend){
    console.log("you can  buy more so pleas do :-)")
    
  }
  else{   
  console.log("you can't buy more go work and get more money ")
}