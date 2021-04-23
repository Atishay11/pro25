
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;
	
    

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	

	engine = Engine.create();
	world = engine.world;


	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	//Create the Bodies Here.
     Dustbin=new dustbin(1200,650)	
	paper=new Paper(100,600,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 paper.display();  
  drawSprites();
   Dustbin.display() 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}
