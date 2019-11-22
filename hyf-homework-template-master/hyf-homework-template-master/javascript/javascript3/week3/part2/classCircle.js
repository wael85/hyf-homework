class Circle {
    constructor(x,y,r,startAngle, endAngle, fillColor){
        this.x = x ;
        this.y = y ;
        this.r = r ;
        this.startAngle =startAngle ;
        this.endAngle = endAngle ;
        this.fillColor = fillColor ;
    }
 draw(canvas){
   let getcont = canvas.getContext('2d');
   getcont.beginPath();
   getcont.arc(this.x,this.y,this.r,this.startAngle, this.endAngle, this.fillColor);
   getcont.stroke();
   getcont.fillStyle = this.fillColor;
   getcont.fill();

 }   
}
const circlePlace = document.querySelector('.circle');
circlePlace.width = window.innerWidth;
circlePlace.height = window.innerHeight;
const cr1 = new Circle (290,145,5,0,2*Math.PI,'red');
cr1.draw(circlePlace);

function randomCircle(){
  let x =  (Math.floor(Math.random() * (290 - 10 + 1) ) + 10);
  let y =  (Math.floor(Math.random() * (145 - 10 + 1) ) + 10);
  let radus =  (Math.floor(Math.random() * (70 - 2 + 1) ) + 2);
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  let cr = new Circle (x,y,radus,0,2*Math.PI,getRandomColor());
  cr.draw(circlePlace);
  console.log('done')
}

//setInterval(()=>{randomCircle();},1000);


//circlePlace.addEventListener("click",randomCircle() );
//document.addEventListener("mousemove", randomCircle);
function randomCircle2(event) {
  let x =  event.clientX
  let y =  event.clientY
  let radus = 10;
    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  let cr = new Circle (x,y,radus,0,2*Math.PI,getRandomColor());
  cr.draw(circlePlace);
  console.log('done')
}

circlePlace.addEventListener("mousemove", randomCircle2);