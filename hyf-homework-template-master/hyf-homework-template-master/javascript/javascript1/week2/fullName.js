// function read tow parameter 
/* function getFullName (firstname,surname){

    return firstname +' '+ surname;

}

console.log(getFullName('Wael','Haded'));
let fullName1 = getFullName('Agne','Baryzaite');
let fullName2 = getFullName('Mohamed','Haded');
console.log(fullName1);
console.log(fullName2); */


//Formal fullname
function getFullName (firstname,surname,useFormalName){
      if (useFormalName == true){
        return 'Lord '+firstname +' '+ surname;

      }else{
          return firstname +' '+ surname;
      }
    
}
let fullName1 = getFullName('Agne','Baryzaite');
let fullName2 = getFullName('Mohamed','Haded',1);
console.log(fullName1);
console.log(fullName2); 
