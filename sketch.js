let FirstName = ['Alroq', 'Blorg', 'Biskhe', 'Chshork', 'Dwshbug', 'Equois', 'Flaqios', 'Goimnhs', 'Homucolus', 'Ijhkoh', 'Koogoh', 'Lozash', 'Maklower', 'Nohghot', 'Ohmuh', 'Puerisho', 'Qhwushtob', 'Ragor', 'Shklim', 'Thimus', 'Udohedn', 'Vario', 'Xhjoohjo', 'Ymider', 'Zzhackro'];
let LastName = ['Alroq', 'Blorg', 'Biskhe', 'Chshork', 'Dwshbug', 'Equois', 'Flaqios', 'Goimnhs', 'Homucolus', 'Ijhkoh', 'Koogoh', 'Lozash', 'Maklower', 'Nohghot', 'Ohmuh', 'Puerisho', 'Qhwushtob', 'Ragor', 'Shklim', 'Thimus', 'Udohedn', 'Vario', 'Xhjoohjo', 'Ymider', 'Zzhackro'];

let fi;
let la;

let rc;
let gc;
let bc; 

let nms;

let button;

function setup() {
  background(220);
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  button = createButton('CLICK ME!');
  button.parent('button-holder');
  button.mousePressed(buttonPressed);
  frameRate(60);
  intText();
  fortBall();
  }

function draw() {
  
  }
function buttonPressed () {

      fi = int(random(FirstName.length));
      la = int(random(LastName.length));
      nmes = FirstName[fi] + ' ' + LastName[la] + ' ';
      rc = random(255);
      gc = random(255);
      bc = random(255);
      fortText();
      console.log(nmes);
    
  
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
function changeBG() {
  let val = random(255);
  background(val);
}
