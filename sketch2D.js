
/*let angle = 0;

let kitten;*/

let x = 200;
let y = 200;
let extraCanvas;

/*let love;

function preload() {
  kitten = loadImage('kittens/kitten2.jpg');
}*/

function setup() {
  createCanvas(400, 300);
  background(0);
  extraCanvas = createGraphics(400, 300);
  extraCanvas.clear();
}

function draw() {
  //sound reaction
  //background(0);
  x += random (-5, 5);
  y += random (-5, 5);
  fill(255, 0, 0);
  stroke(255);
  rectMode(CENTER);
  ellipse(x, y, 55, 55);

  // obj
  if (mouseIsPressed) {
    extraCanvas.fill (255, 150);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 60, 60);
  }
  /*ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.5);

  box(100);

  texture(kitten);

  angle += 0.03;*/

  image(extraCanvas, 0, 0);

}
