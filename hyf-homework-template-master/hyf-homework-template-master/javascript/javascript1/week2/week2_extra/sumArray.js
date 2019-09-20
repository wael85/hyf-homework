function sumArray(arrayofNum){
    let sum =0;
    for (i = 0 ; i < arrayofNum.length; i++){
        sum +=arrayofNum[i];
        
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5]));