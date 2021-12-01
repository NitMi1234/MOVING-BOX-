//declarng a variable
var box;

//to creat things use function setup
function setup() {
  createCanvas(1600,1000);
  box=createSprite(500,500,50,50)
}

function draw() 
{
  background("blue");

  if(keyIsDown(RIGHT_ARROW)){
    box.x+=10
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x-=10
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y+=10
  }

  if(keyIsDown(UP_ARROW)){
    box.y-=10
  }
  drawSprites();
}




