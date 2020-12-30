var fixedRect;
var movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="cyan";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="yellow";
}
function draw() {
  background('red');
  movingRect.x=World.mouseX ;
  movingRect.y=World.mouseY ; 
  if(movingRect.x-fixedRect.x === fixedRect.width/2+movingRect.width/2 || fixedRect.x-movingRect.x === fixedRect.width/2+movingRect.width/2) {
   movingRect.shapeColor="purple";
   fixedRect.shapeColor="green"}
  drawSprites();
}