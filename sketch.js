
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var leftWall;
var rightWall;

function setup() {
	createCanvas(800, 680);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100, 1, 10);

	ground = new Ground(400, 670, 800, 20);

	leftWall = new Dustbin(550, 620, 20, 100);
	rightWall = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
	rectMode(CENTER);

	background("black");

	Engine.update(engine);

	ball.display();
	ground.display();
	leftWall.display();
	rightWall.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15});
	}
}

