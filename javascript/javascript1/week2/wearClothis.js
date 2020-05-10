 //Weather Wear//
 function weatherWear(c){
    if (c <=17 ){
      return "jacket and gloves"
    }
    else{
      return "shorts and a t-shirt"
    }
   }
  const clothesToWear = weatherWear(18);
  console.log(clothesToWear);