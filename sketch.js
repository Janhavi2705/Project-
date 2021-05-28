
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,paper,ground,dustbin;


function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(400,500,800,20)
  dustbin = new Dustbin(500,220);
  paper = new Paper(100,450,70);
    //paper.scale  = 0.1;
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

  paper.display();
  ground.display();

dustbin.display();
  drawSprites();
 
 //console.log(this.x)
  

}

function keyPressed(){
 if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 }
}

