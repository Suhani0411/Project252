var ball1,ground,b3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,690,800,20);
	ball1=new Ball(50,650,70);
	b3=new buckets(700,640);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ball1.display();
  ground.display();
 // b1.display();
 // b2.display();
  b3.display();


  keypressed();

  drawSprites();
 
}
function keypressed()
{
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:11,y:-12});
	}
}



