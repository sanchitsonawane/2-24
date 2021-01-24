
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var hammer,iron,rubber,ground,engine,world;



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(10,100)
    rubber= new Rubber(900,450,70)
	iron = new Iron(300,350)
	//ground = new Ground(200,50,1200,20)

	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
Engine.update(engine);
  hammer.display();
  rubber.display();
  iron.display();
  //ground.display();
  
  drawSprites();
 
}



