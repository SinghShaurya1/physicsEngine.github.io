const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var backgroundImg, appleImg, mangoImg, treeImg, bananaImg;
var background, apple, mango, tree, banana;

var question = [];
var answer = [];
var option = [];


function preload() {
  backgroundImg = loadImage('meadow.jpg');
  treeImg = loadImage('tree.png');
  appleImg = loadImage('apple.png')
  mangoImg = loadImage('mango.png')
}

function setup() {
  canvas = createCanvas(700, 700);

  engine = Engine.create();
  world = engine.world;

  ground = Bodies.rectangle(350, 700, 700, 10, { isStatic: true });
  World.add(world, ground);

  tree = Bodies.rectangle(350, 350, 100, 200, { isStatic: true });
  World.add(world, tree);

  
}


function draw() {
  background('aqua');
  image(backgroundImg, 0, 0, width, height)

  Engine.update(engine);

 /* push();
  imageMode(CENTER);
  image(treeImg, 400, 300, 400, 500);
  pop();

  push();
  translate(ground.position.x, ground.position.y);
  fill("brown");
  rectMode(CENTER);
  rect(0, 0, 700, 10);
  pop();*/
}
