let c = document.querySelector('#myCanvas');
c.width = 1000;
c.height = 1000 ;

let ctx = c.getContext('2d');



ctx.beginPath();
ctx.arc(500 , 500, 250, 0, 2 * Math.PI);
ctx.stroke();
//ctx.fillStyle = "red";
//ctx.fill();
ctx.stroke();

var grd = ctx.createRadialGradient(500,500,250,500,500,25);
grd.addColorStop(1,"red");
grd.addColorStop(0.9,"green");
grd.addColorStop(0.7,"yellow");
grd.addColorStop(0.5,"pink");
grd.addColorStop(0.4,"navy");
grd.addColorStop(0.3,"purple");
grd.addColorStop(0.1,"brown");
grd.addColorStop(0,"green");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fill();

