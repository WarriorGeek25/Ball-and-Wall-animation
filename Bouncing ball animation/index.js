// Import stylesheets
import './style.css';

// Write Javascript code!
var canvas = document.getElementById('mycanvas');
var context;

// Moving the circle

var context;
var x = 100;
var y = 100;
var dx = 5;
var dy = 1;

function init() {
  context = mycanvas.getContext('2d');
  setInterval(draw, 10);
}

function draw() {
  context.clearRect(0, 0, 300, 300);
  context.beginPath();
  context.fillStyle = 'lightgreen';
  // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
  context.arc(x, y, 20, 0, Math.PI * 2, true);
  context.closePath();
  context.fill();

  // Boundary Logic
  if (x < 9 || x > 290) dx = -dx;
  if (y < 9 || y > 290) dy = -dy;
  x += dx;
  y += dy;
}

init();
