function maxOfArray(arrayofNum){
       let a = arrayofNum[0];
       for (i=0;i<(arrayofNum.length); i++){
             
            if (a>arrayofNum[i]){
                 a = a;
            }else {
                   a = arrayofNum[i];
            }
         }
 return a;
}
let array1 = [-2,2,7,3,0,10];
console.log(maxOfArray(array1));