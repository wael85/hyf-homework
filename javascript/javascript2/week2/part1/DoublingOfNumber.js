let numbers = [1, 2, 3, 4];
//let newNumbers = [];

//for(let i = 0; i < numbers.length; i++) {
//    if(numbers[i] % 2 !== 0) {
//        newNumbers[i] = numbers[i] * 2;
//    }
//}

//console.log("The doubled numbers are", newNumbers); // [2, 6]


let numbers1 = numbers.filter(function(value){
    return value % 2 ==1 ;
}).map(function(value){
    return value * 2 ;
});
console.log(numbers1);

let numbers2 = numbers.filter(value => value % 2 ==1).map(value => value * 2);
console.log(numbers2);