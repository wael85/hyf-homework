
function halfOfAll(arrayOfNum){
    let arrayOfNum1 =[];
    for (i=0 ; i<arrayOfNum.length ;i++){
        arrayOfNum1.push(arrayOfNum[i]/2);
    }
  return arrayOfNum1;
}
const arrayOfNumTest = [3,5,77,45,3,2,4]
console.log(halfOfAll(arrayOfNumTest));