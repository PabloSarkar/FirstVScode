var box;
function setup() {
  createCanvas(1000,1000);
  box = createSprite(200,200,100,100);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  box.position.x= box.position.x+2;
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x= box.position.x-2;
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y= box.position.y-2;
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y= box.position.y+2;
  }
  drawSprites();
}




