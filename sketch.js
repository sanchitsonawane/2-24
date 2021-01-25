
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;

var hammer,iron,rubber,ground,engine,world,sand1,sand2,sand3,sand4,sand5;
var stone


function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;
	hammer = new Hammer(10,100)
    rubber= new Rubber(900,450,70)
	iron = new Iron(300,350)
	ground = new Ground(600,height,1200,20)
	sand1 =new Sand(505,450,10);
	sand2 =new Sand(510,450,10)
	sand3=new Sand(515,450,10)
	sand4 =new Sand(520,450,10)
	sand5 =new Sand(525,450,10)
	stone = new Stone(700,320,100,100);
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  
  background("lightblue");
Engine.update(engine);
  hammer.display();
  rubber.display();
  iron.display();
  ground.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display(); 
  sand5.display(); 
  stone.display();
  
  
  drawSprites();
 
}



