var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3  = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);
  object1.shapeColor = "cyan";
  object2.shapeColor = "magenta";
  object3.shapeColor = "blue";
  object4.shapeColor = "lime";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(object1,movingRect)){

 
    movingRect.shapeColor = "red";
   object1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "cyan";
  }
  if (isTouching(object2,movingRect)){

 
    movingRect.shapeColor = "red";
   object2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object2.shapeColor = "magenta";
  }
  if (isTouching(object3,movingRect)){

 
    movingRect.shapeColor = "red";
   object3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object3.shapeColor = "blue";
  }
  if (isTouching(object4,movingRect)){

 
    movingRect.shapeColor = "red";
   object4.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object4.shapeColor = "lime";
  }
  
  

  drawSprites();
}
function isTouching(ob1,ob2){
  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
    && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
    && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
      return true;
    }
    else {
      return false;
    }
}