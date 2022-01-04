var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  doorsGroup=createGroup();
  invisibleBlockGroup=createGroup();
  climbersGroup=createGroup();

  ghost = createSprite(200,210);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.3;


  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
   
spawnDoors();

if(gameState==="play")
if(keyDown("space")){
ghost.velocityY=-10;
}
ghost.velocityY=ghost.velocityY+1
if(keyDown("RIGHT_ARROW")){
ghost.velocityX=10
}
if(keyDown("LEFT_ARROW")){
ghost.velocityX=-10
}
    drawSprites();
}
if (gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over", 230,250)
}
function spawnDoors(){
  if (frameCount % 240 === 0) {
door = createSprite(200,-40)
climber = createSprite(200,10)
invisibleBlock = createSprite(200,15)
invisibleBlock.width=climber.width;
invisibleBlock.height=2;

door.velocityY=1;
climber.velocityY=1;
invisibleBlock.velocityY=1;

door.addImage("door",doorImg);
climber.addImage("climber",climberImg);

door.x=random(120,400);
climber.x=door.x
invisibleBlock.x=door.x

ghost.depth = door.depth;
ghost.depth +=1;

door.lifetime = 800;
climber.lifetime = 800;
invisibleBlock.lifetime = 800;

doorsGroup.add(door);
climbersGroup.add(climber);
invisibleBlockGroup.add(invisibleBlock);


  }
}
