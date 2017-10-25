function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 153);
}

//background change
//frameRate(1);
//background(int(random(255)), int(random(255)), int(random(255)));
//fill(int(random(255)), int(random(255)), int(random(255)));

function draw() {

  var hr = hour();
  var mi = minute();
  var sec = second();

  if (clockSec < 10) {
    clockSec = "0" + clockSec;
  }
  if (clocKMin < 10) {
    clockMi = "0" + clockMi;
  }
  if (clockHr < 10) {
    clockHr = "0" + clockHr;
  }


  clockText();
}


// Declare a new function
function clockText(hr, mi, sec); {

  // How to draw the clock 
  textAlign(CENTER);
  textSize(windowWidth / 6);
  stroke(1);
  fill("red");
  textFont("Arial");

  //text(x, y, width, height)
  text(hr + ":" + mm + ":" + ss, windowWidth / 2, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}