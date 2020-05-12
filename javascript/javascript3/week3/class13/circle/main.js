
const ctxCan = document.querySelector("canvas");
ctxCan.width = 1200;
ctxCan.height = 900;
const ctx =ctxCan.getContext("2d");
ctx.arc (100,100,50,0,360);
ctx.strokeStyle= "blue";
ctx.stroke();
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x ;
        this.y = y ;
        this.r = r ;
        this.startAngle = startAngle ;
        this.endAngle = endAngle ;
        this.fillColor = fillColor ;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle);
        ctx.fillStyle = this.fillColor ;
        ctx.fill();
    }
}
const c1 = new Circle(50,50,10,0,360,'red');
c1.draw(ctx);
const c2 = new Circle(50,25,10,0,360,'blue');
c2.draw(ctx)
//circle every 500ms
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const interval =setInterval(()=>{
    const circle = new Circle (getRandomInt(1200),getRandomInt(900),getRandomInt(100),0,360,colorArray[getRandomInt(50)]);
    circle.draw(ctx);
},500)
setTimeout(()=>{
    clearInterval(interval);
},5000);
//follow the mouse 
ctxCan.addEventListener("mousemove",(e)=>{
    const circle = new Circle (e.clientX,e.clientY,10,0,360,colorArray[getRandomInt(50)]);
    circle.draw(ctx);
})