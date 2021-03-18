
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,playerImage;
var police, policeImage;
var ground, groundImage, invisibleGround

function preload()
{
	playerImage = loadImage("playerRunning.gif");
	policeImage = loadImage("copsChasing.gif");
	groundImage = loadImage("backgroundImage.jpg")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    player = createSprite(1000,600,20,20);
	player.addImage(playerImage);
	player.scale = 0.2

	police = createSprite(1300,600,20,20);
	police.addImage(policeImage);

	invisibleGround = createSprite(700,700,2000,10);
	invisibleGround.visible = false;

	ground = createSprite(700,350,1400,700);
	ground.addImage("ground",groundImage);
	ground.x = ground.width /2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if (ground.x < 0){
	ground.x = ground.width/2;
  }
  if(keyDown("space")&& player.y >= 400) {
	player.velocityY = -12;
}
0
  player.velocityY = player.velocityY + 0.8
  police.velocityY = player.velocityY + 0.8
  
  player.collide(invisibleGround);
  police.collide(invisibleGround);
  drawSprites();
 
}



