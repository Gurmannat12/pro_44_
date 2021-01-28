const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ship;
var fire;
var alien1;
var alien2;
var alien3;
var alien4;
var alien5;
var shipImg;
var divisions = [];
var divisionHeight=300;

function preload() {
    alien1 = loadImage("a1.jpg");
    alien2 = loadImage("a2.jpg");
    alien3 = loadImage("a3.png");
    alien4 = loadImage("a4.jpg");
    alien5 = loadImage("a5.png");

    shipImg = loadImage("ship.png");
}

function setup() {
  createCanvas(785, 800);

  engine = Engine.create();
  world = engine.world;

  ship = createSprite(200,400,50);
  ship.addImage(shipImg);

  for (var k = 0; k <=width; k = k + 130)
        {
            divisions.push(new Division(k,height-divisionHeight*2.3,10,divisionHeight));
        }
  
}

function draw() {
  background(0);
  Engine.update(engine);

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ship.display();

}