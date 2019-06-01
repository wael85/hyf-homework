function getFullName (firstName,lastName,useFormalName){
    if (useFormalName==true){
      return "lourd"+" "+firstName+" "+lastName;
    }
    else{
      return firstName+" "+lastName;
    }
    
  }
  console.log(getFullName("wael","haded",true));
  var fullName1=getFullName('Amer','Amar');
  var fullName2=getFullName('Khaled','Dahole');
  console.log(fullName1);
  //Event application//
  function getWeekdayEvent(numOfDays) {
    var d = new Date();
    var weekday = ['Sunday','Monday','Tusday','Wednsday','Thursday','Friday','Saturday']
  
    var n = weekday[(d.getDay()+numOfDays)%7];
    console.log(n);
    
  }
  getWeekdayEvent(10);
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

  //Student Mangment//
  const class07Students = [];
function addStudentToClass(studentName) {
  if ( class07Students.length==6 && studentName != "Queen"){
    alert( "Cannot add more students to class 07");
  }
  else if (class07Students.includes(studentName) || studentName.length == 0 ){
    alert("The student name is already exist!! or The you did not enter a name.");
  }
  else {
    return class07Students.push(studentName);}
}

function getNumberOfStudents() {
    return studentName.length;
}
//Candy helper optional
let boughtCandyPrices = [];
function addCandy(candyType,weight){
  if (candyType == "Sweet"){
    boughtCandyPrices.push(weight * 0.5)
  }
  else if (candyType == "Chocolate"){
    boughtCandyPrices.push(weight * 0.7)
  }
  else if (candyType == "Toffe"){
    boughtCandyPrices.push(weight * 1.1)
  }
  else if (candyType == "Chewing-gum"){
    boughtCandyPrices.push(weight * 0.03)
  }
}
addCandy("Sweet",20);
addCandy("Chocolate",10);
addCandy("Toffe",30);
addCandy("Chewing-gum",5);
console.log(boughtCandyPrices);
var amountToSpend = Math.floor(Math.random() * 100); 
console.log(amountToSpend)
 function getSum(total, num) {
  return total + num;
}
var sum = boughtCandyPrices.reduce(getSum);
console.log("the sum is :"+sum);
while (sum <amountToSpend){
  if (sum>= amountToSpend){
    console.log("you can not buy more")
    break;
    
  }
  console.log("you can buy more")
}