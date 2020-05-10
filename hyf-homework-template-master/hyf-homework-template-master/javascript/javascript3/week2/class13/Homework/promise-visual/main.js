const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const thamb = document.querySelector('span');
const boxes = [redBox, blueBox, greenBox];

// move one by on
function translateOneByOne(){
    moveElement(redBox, {x: 20, y: 300})
    .then(res=>console.log('red'));
       return moveElement(blueBox, {x: 400, y: 300})
    .then(res=>console.log('blue'))
       return moveElement(greenBox, {x: 400, y: 20})
    .then(res=>console.log('green'))
    .then(thamb.classList.add('shown'))  
}
//move all at once
function translateAllAtOnce(){
Promise.all([moveElement(redBox, {x: 20, y: 300}),
    moveElement(blueBox, {x: 400, y: 300}),
     moveElement(greenBox, {x: 400, y: 20})])
     .then(()=>console.log('all done'));
}
translateOneByOne();
//translateAllAtOnce();