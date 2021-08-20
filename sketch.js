var seaImg;
var shipImg1;
var sea;
var ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation( "ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png" );


}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  sea.addImage(seaImg);
   sea.scale=0.3;
   sea.velocityX = -2
  
   ship = createSprite(130,200);
   ship.addAnimation("movingShip", shipImg1);
   ship.scale = 0.2;
}

function draw() {
  background("blue");
    
  if(sea.x< 0) {
    sea.x= sea.width/8
  }

  drawSprites();
}