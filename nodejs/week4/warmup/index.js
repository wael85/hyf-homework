class Email {
    constructor(subject , body) {
        this.subject = subject;
        this.body = body ;
    }
}
class SpamDetector {
  isSpam(email){
      if (upperCaseCheck(email) || wordCheck(email) || checkHello(email)){
          return true;
      }else{
          return false;
      }
  }  
}

const upperCaseCheck = (email)=>{
    let uperCase = 0;
    let count = 0 ;
    let discardCass = [" ","/","!",".",",","$","#","?"]
    for (let i = 0 ; i < email.body.length ; i++){
        if(discardCass.indexOf(email.body[i])>0){
          // console.log(email.body[i]);
            count = count;
        }else{
            if (email.body[i] === email.body[i].toUpperCase() ){
               // console.log(email.body[i])
                uperCase+=1;
                count+=1;
            }else{
              count+=1;
            }
        }
      }
    if((uperCase/count)<0.6){
        return false;
    }else{
        return true;
    }
}
const wordCheck = (email)=>{
    let badWords = ["Viagra","Offer","Free","business","Proposal"];
    const splitToWords = email.body.split(" ");
    let fact = false;
    for (let i = 0 ; i < splitToWords.length ; i++){
        if(badWords.indexOf(splitToWords[i]) in [0,1,2]){
           // console.log(splitToWords[i])
            fact = true ;
        }if(badWords.indexOf(splitToWords[i])===3 && badWords.indexOf(splitToWords[i+1]) === 4 ){
            fact = true;
        }
    }
    return fact ;
}
const checkHello = (email)=>{
    const splitToWords = email.subject.split(" "); 
    //console.log(splitToWords); 
    if(splitToWords.length === 1 && splitToWords[0] === "Hello"){
        return true ;
    }else{
        return false ;
    }
}
const emailFromOldFriend = new Email("Hello", "Long   time no   Proposal see , when should we hang out again??");
const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend)); // false