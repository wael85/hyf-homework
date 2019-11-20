const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');
const thamb = document.querySelector('span');
const boxes = [redBox, blueBox, greenBox];



function translateOneByOne(){
    moveElement(redBox, {x: 20, y: 300})
    .then(res=>console.log('red'));
    setTimeout(()=>{moveElement(blueBox, {x: 400, y: 300})
    .then(res=>console.log('blue'));},1000);
    setTimeout(()=>{moveElement(greenBox, {x: 400, y: 20})
    .then(res=>console.log('green'));},2000);
    setTimeout(()=>{
        thamb.classList.add('shown');
    
    },4000)
    
    
}
//translateOneByOne();
function translateAllAtOnce(){
   /* moveElement(redBox, {x: 20, y: 300})
    .then(res=>console.log('red'));
    moveElement(blueBox, {x: 400, y: 300})
    .then(res=>console.log('blue'));
    moveElement(greenBox, {x: 400, y: 20})
    .then(res=>console.log('green'));
    setTimeout(()=>{
        thamb.classList.add('shown');
    
    },2000);*/
Promise.all([moveElement(redBox, {x: 20, y: 300}),
    moveElement(blueBox, {x: 400, y: 300}),
     moveElement(greenBox, {x: 400, y: 20})])
     .then(()=>console.log('all done'));

}


   
translateAllAtOnce(); 
