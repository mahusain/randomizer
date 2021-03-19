let FirstName = ['Alroq', 'Blorg', 'Biskhe', 'Chshork', 'Dwshbug', 'Equois', 'Flaqios', 'Goimnhs', 'Homucolus', 'Ijhkoh', 'Koogoh', 'Lozash', 'Maklower', 'Nohghot', 'Ohmuh', 'Puerisho', 'Qhwushtob', 'Ragor', 'Shklim', 'Thimus', 'Udohedn', 'Vario', 'Xhjoohjo', 'Ymider', 'Zzhackro'];
let LastName = ['Alroq', 'Blorg', 'Biskhe', 'Chshork', 'Dwshbug', 'Equois', 'Flaqios', 'Goimnhs', 'Homucolus', 'Ijhkoh', 'Koogoh', 'Lozash', 'Maklower', 'Nohghot', 'Ohmuh', 'Puerisho', 'Qhwushtob', 'Ragor', 'Shklim', 'Thimus', 'Udohedn', 'Vario', 'Xhjoohjo', 'Ymider', 'Zzhackro'];

let fi;
let la;

let rc;
let gc;
let bc;

let nms;

function setup() {
  background(220);
  createCanvas(400, 400);
  frameRate(60);
  intText();
  fortBall();
  }

function draw() {

  }
function mousePressed () {
  if (mouseX < width*0.65 && mouseX > width*0.30 && mouseY < height*0.65 && mouseY > height*0.30) {
      fi = int(random(FirstName.length));
      la = int(random(LastName.length));
      nmes = FirstName[fi] + ' ' + LastName[la] + ' ';
      rc = random(255);
      gc = random(255);
      bc = random(255);
      fortText();
      console.log(nmes);

      }

}
function fortBall() {
  fill(rc, gc, bc);
  ellipse(width*0.5, height*0.5, 100);

}

function intText() {
  fill (255);
  textAlign(CENTER);
  text('Your alien name is', width*0.5, height*0.3);
}
function fortText() {
  background(0);
  intText();
  fortBall();
  fill(255);
  textAlign(CENTER);
  text(nmes, width*0.5, height*0.7);
}
