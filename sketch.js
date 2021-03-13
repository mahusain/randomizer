function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 140);
  
textSize(16);
strokeWeight(0.5);

line(0, 50, width, 50);
textAlign(CENTER, TOP);
text('Your name', 0, 60, width);

line(0, 100, width, 100);
textAlign(CENTER, CENTER);
text('is', 0, 85, width);

line(0, 300, width, 300);
textAlign(CENTER, BASELINE);
text('First Name', 0, 300, width);

line(0, 350, width, 350);
textAlign(CENTER, BOTTOM);
text('Last Name', 0, 350, width);
}