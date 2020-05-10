const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeToArriv(object){
      let hours = Math.floor(object.destinationDistance /object.speed);
      
      let minutes = ((object.destinationDistance%object.speed)*60)/100;
      return hours+" hours and "+Math.ceil(minutes)+" minuts."
  }
  
  const travelTime = timeToArriv(travelInformation);
  console.log(travelTime); // 4 hours and 42 minutes