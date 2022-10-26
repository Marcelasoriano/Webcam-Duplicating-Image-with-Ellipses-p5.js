let cam;
let bttn;

function setup() {
  createCanvas(600, 500);
  cam=createCapture(VIDEO);
  background(0);
  
}

function draw() {
  
  for(let i=3;i<100;i++) {
  var x= random(width);
  var y=random(height);
  var c=cam.get(x,y);
  noStroke();
  fill(c,255);
  ellipse(x,y,6,6);
      
  }
}
function mousePressed() {
  saveCanvas(canvas, "myPhoto", "jpg");
  
}

