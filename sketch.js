
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    
	//Create the Bodies Here.
    roof1 = new Roof(200,50,200,10);

    var bobDiameter = 40;

	bobObject1 = new bob(160,250,20);
	bobObject2 = new bob(180,250,20);
	bobObject3 = new bob(200,250,20);
	bobObject4 = new bob(220,250,20);
	bobObject5 = new bob(240,250,20);

	rope1 = new rope(bobObject1.body, roof1.body, -bobDiameter*2, 0);
	rope2 = new rope(bobObject2.body, roof1.body, -bobDiameter*1, 0);
	rope3 = new rope(bobObject3.body, roof1.body, 0, 0);
	rope4 = new rope(bobObject4.body, roof1.body, bobDiameter*1, 0);
	rope5 = new rope(bobObject5.body, roof1.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}



