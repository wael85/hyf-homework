/* age in futuer*/
var yearOfBirth ;
var futureYear;
var age = futureYear - yearOfBirth;
yearOfBirth=1985;
futureYear= 2020;
console.log("you will be "+age+"years old in "+futureYear);

/* dog age culcolater */
var dogYearOfBirth =2017 ;
var dogYearFuture= 2027;
var dogYear = dogYearFuture - dogYearOfBirth;
var shouldShowResultInDogYears=0;
if (shouldShowResultInDogYears==true){
    console.log("Your dog will be 70 dog years old in 2027");
}
else{
    console.log("Your dog will be 10 human years old in 2027");
}

/*  Housey pricey */
var huseHeight = 10 ;
var huseDepth = 10 ;
var husWidth = 8 ;
var gardenSizeInM2 = 100 ;
var volumeInMeters = husWidth * huseDepth * huseHeight;
var requstedPrice =  2500000;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}
 huseHeight = 8 ; 
huseDepth = 11 ;
husWidth = 5 ;
gardenSizeInM2 = 70 ;

 requstedPrice =  1000000;

if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}

/*Ez Namey */
var firstWord = ["good","great","easy","awesome","corporat","good1","good3","good4","good5","good6"];
var seconWords = ['nice','nice1','nice2','nice3','nice4','nice5','nice6','nice7','nice8','nice9']
startupName = firstWord[Math.floor(Math.random() * 10)]+seconWords[Math.floor(Math.random() * 10)];
console.log(startupName);
console.log(startupName.length)