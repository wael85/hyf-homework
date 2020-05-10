
function getEventWeekday(numOfDays){
    let todayDate = new Date();
    let weekDays = ['Sunday','Monday','Tusday',
    'Wedensday','Thursday','Fraiday',
    'Saturday'] ;   
    let eventDay = weekDays[(numOfDays + todayDate.getDay())  % 7 ];
    console.log( todayDate.getDay());
    return eventDay ;
}

console.log(getEventWeekday(15));
