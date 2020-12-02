//let angle = 0;
let kitten;
let train;


function preload() {
  kitten = loadImage('kittens/kitten2.jpg');
  train = loadModel('train-corrected.obj');
}

function setup() {
  createCanvas(400, 300, WEBGL);
}

function draw() {
  background(0);

  let posX = width/2;
  let posY = height/2;

  let angle = Math.atan2(mouseY-posY, mouseX-posX);

  rotate(angle)

  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, 1);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  //box(100);
  translate(0, 0, 0);
  texture(kitten);
  model(train);
  noStroke();
  angle += 0.03;
}
