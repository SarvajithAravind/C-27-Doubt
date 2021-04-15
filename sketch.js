
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var BobObject1;
var BobObject2;
var BobObject3;
var BobObject4;
var BobObject5;

var ground;
var roof;

var roof1, roof2, roof3, roof4, roof5;
var rope1, rope2, rope3, rope4, rope5;

var bobDiameter



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,600,1400,50);
	roof = new Ground(250,200,1400,50);

	BobObject1 = new Bob(250,475,100);
	BobObject2 = new Bob(300,475,100);
	BobObject3 = new Bob(350,475,100);
	BobObject4 = new Bob(400,475,100);
	BobObject5 = new Bob(450,475,100);

	roof1 = new Roof(250,200,50,50);
	roof2 = new Roof(300,200,50,50);
	roof3 = new Roof(350,200,50,50);
	roof4 = new Roof(400,200,50,50);
	roof5 = new Roof(450,200,50,50);

	rope1 = new Rope(BobObject1.body, roof1.body,-bobDiameter*2,0)
	rope2 = new Rope(BobObject2.body, roof2.body,-bobDiameter*2,0)
	rope3 = new Rope(BobObject3.body, roof3.body,-bobDiameter*2,0)
	rope4 = new Rope(BobObject4.body, roof4.body,-bobDiameter*2,0)
	rope5 = new Rope(BobObject5.body, roof5.body,-bobDiameter*2,0)
	//rope2 = new Rope(BobObject2.body, roof.body,-bobDiameter*2,0)
	//rope3 = new Rope(BobObject3.body, roof.body,-bobDiameter*2,0)
	//rope4 = new Rope(BobObject4.body, roof.body,-bobDiameter*2,0)
	//rope5 = new Rope(BobObject5.body, roof.body,-bobDiameter*2,0)

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("green");

  if (keyDown(UP_ARROW)) {
	let i = 0;

while (i < 4) {
    console.log( "Block statement execution no." + i );
	BobObject1 = new Bob(15,475,100);
	rope1 = new Rope(BobObject1.body, roof1.body,-bobDiameter*2,0)
	rope1.display();
	// BobObject1 = new Bob(250,475,100);
	// rope1 = new Rope(BobObject1.body, roof1.body,-bobDiameter*2,0)
	// rope1.display();
	BobObject5 = new Bob(750,475,100);
	rope5 = new Rope(BobObject5.body, roof5.body,-bobDiameter*2,0)
	rope5.display();
    i++;
}
	
	
  }

  ground.display();
  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



