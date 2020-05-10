function UppercaseOfValues(arrayOfStrings){
    let newArray = [];
    for (i=0 ; i<arrayOfStrings.length ; i++){
        newArray.push(arrayOfStrings[i].toUpperCase());

    }
   return newArray;
}
let array2 = ['wael','marten','jonas'];
console.log(UppercaseOfValues(array2));