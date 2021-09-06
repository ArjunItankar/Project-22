const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var con;


function setup() {
	//create the canvas
	createCanvas(800, 600);
	rectMode(CENTER);

	//create the engine
	engine = Engine.create();
	world = engine.world;

	//create the balls
	var ball_options = {
		isStatic:false			
	}

	ball1 = Bodies.circle(300, 350, 10, ball_options);
	World.add(world, ball1);

	ball2 = Bodies.circle(341, 350, 10, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(382, 350, 10, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(423, 350, 10, ball_options);
	World.add(world, ball4);

	ball5 = Bodies.circle(464, 350, 10, ball_options);
	World.add(world, ball5);

	
	//create the roof
	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(385, 100, 230, 20, roof_options);
    World.add(world, roof);

	//create the ropes
	rope1 = new rope(ball1, roof, -80, 0);
	rope2 = new rope(ball2, roof, -40, 0);
	rope3 = new rope(ball3, roof, 0, 0);
	rope4 = new rope(ball4, roof, 40, 0);
	rope5 = new rope(ball5, roof, 80, 0);

	Engine.run(engine);
}

function draw() {
	//draw the canvas
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  //draw the roof
  rect(roof.position.x, roof.position.y, 230, 20);

  //draw the balls
  ellipse(ball1.position.x, ball1.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 20);
  ellipse(ball3.position.x, ball3.position.y, 20);
  ellipse(ball4.position.x, ball4.position.y, 20);
  ellipse(ball5.position.x, ball5.position.y, 20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

//write keyPressed function and apply force on pressing up_arrow key on the first ball
function keyPressed()
{
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(ball5,ball5.position,{x:-50, y:0} );
	}
}