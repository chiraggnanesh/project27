
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(800, 100, 300, 40);

	bobObject1 = new Bob(700, 300, 50);
	bobObject2 = new Bob(750, 300, 50);
	bobObject3 = new Bob(800, 300, 50);
	bobObject4 = new Bob(850, 300, 50);
	bobObject5 = new Bob(900, 300, 50);

	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background("purple");

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	ground.display();
	roof.display();

	drawSprites();
}



