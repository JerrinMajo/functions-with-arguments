var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  
  fixedRect=createSprite(100, 300, 50, 80);
  movingRect=createSprite(1000, 300, 80, 30);
  fixedRect.shapeColor="green";
  fixedRect.velocityX=4;
  movingRect.shapeColor="green";
  movingRect.velocityX=-4;
}

function draw() {
  background(0,0,0);
  
 /* movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }*/

  bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

