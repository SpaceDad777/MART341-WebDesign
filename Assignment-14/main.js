var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Drawing a line
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(250, 150);
ctx.stroke();

// Drawing a rectangle
ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(500, 50);
ctx.lineTo(500, 150);
ctx.lineTo(300, 150);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();
ctx.stroke();

// Drawing a circle
ctx.beginPath();
ctx.arc(650, 150, 125, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();

// Drawing another line
ctx.beginPath();
ctx.moveTo(750, 300);
ctx.lineTo(750, 700);
ctx.stroke();

// Drawing another rectangle
ctx.beginPath();
ctx.moveTo(700, 300); 
ctx.lineTo(900, 300);
ctx.lineTo(900, 500);
ctx.lineTo(700, 500);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();

// Drawing another circle
ctx.beginPath();
ctx.arc(150, 300, 100, 0, 2 * Math.PI);
ctx.fillStyle = "orange";
ctx.fill();
ctx.stroke();

// Drawing a triangle 
ctx.beginPath();
ctx.moveTo(100, 450); 
ctx.lineTo(350, 550); 
ctx.lineTo(500, 450); 
ctx.closePath();
ctx.fillStyle = "purple";
ctx.fill();
ctx.stroke();

// Drawing an ellipse
ctx.beginPath();
ctx.ellipse(450, 550, 80, 40, 0, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// Drawing another rectangle
ctx.beginPath();
ctx.moveTo(200, 200); 
ctx.lineTo(400, 200);
ctx.lineTo(900, 500);
ctx.lineTo(700, 500);
ctx.closePath();
ctx.fillStyle = "cyan";
ctx.fill();
ctx.stroke();

// Funky rectangle
ctx.beginPath();
ctx.moveTo(300, 300); 
ctx.lineTo(700, 300);
ctx.lineTo(300, 500);
ctx.lineTo(700, 500);
ctx.closePath();
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

// Adding text
ctx.font = "16px Brush Script MT, cursive";
ctx.fillStyle = "black";
ctx.fillText("Exploring Shapes and Overlaps", 20, c.height - 20);
 
// Drawing a rectangle behind the text
ctx.beginPath();
ctx.rect(10, c.height - 40, 300, 30); 
ctx.stroke();