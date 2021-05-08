
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbinL;
var dustbinM;
var dustbinR;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground = new Ground(600,690,1200,20);
	paper = new Paper(100,100,35,35);
	dustbinL = new Dustbin(810,590,20,100);
	dustbinM = new Dustbin(900,650,200,20);
	dustbinR = new Dustbin(990,590,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  drawSprites();

  fill(rgb(110,120,125))
	ground.display();
	fill(rgb(125,120,99))
	paper.display();
	fill(rgb(43,47,90))
	dustbinL.display();
	dustbinM.display();
	dustbinR.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-65})

	}
}

