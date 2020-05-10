function dateCalculater(comingDate){
    let dateNow = new Date();
    
    let dateTest = Date.parse(comingDate);
    
    let leftOfSeconds = dateTest -dateNow ;
    let leftOfDay = leftOfSeconds/ 86400000;
    let leftOfDays = Math.round(leftOfDay);
    if (leftOfDays ===1){
        return 'one day left'
    }else if (leftOfDays > 1){
    return (leftOfDays +' Days left')
 }else {
     return 'It is today'
 }

}
// inter the date in this way ('day month year') example 
// '14 Jun 2050'

console.log(dateCalculater('19 Sep 2019'));