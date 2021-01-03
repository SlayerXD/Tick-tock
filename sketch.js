var hr, min, sec
var hrangle, minangle, secangle
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  min = minute();
  sec = second();
  secangle = map(sec, 0, 60, 0, 360);
  minangle = map(min, 0,60,0,360);
  hrangle = map(hr%12, 0, 12, 0, 360)
  push();
  rotate(secangle)
  stroke("blue");
  strokeWeight(16);
  line(0,0,100,0);
  pop();

  push();
  rotate(minangle)
  stroke("green");
  strokeWeight(16);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrangle)
  stroke("red");
  strokeWeight(16);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("blue")
  arc(0,0,300,300,0,secangle);

  stroke("green")
  arc(0,0,280,280,0,minangle);

  stroke("red")
  arc(0,0,260,260,0,minangle);

}