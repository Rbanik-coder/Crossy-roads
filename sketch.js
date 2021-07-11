var grid = 50;
var width = 1366;
var car,log;
var carGroup,logGroup;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  carGroup = new Group();
  logGroup = new Group();

  for(var i=0;i<6;i++)
  {var grass = createSprite(750,height-50-(i*400),width,grassHeight);

  if(i%2===0)
   {
    var road = createSprite(750,height-150-(i*400)-grassHeight,width,300);
    road.shapeColor="black";
   }
  grass.shapeColor='lime';
}

  for(var i=0;i<40;i++)
  {
    car = new Car(2);
    carGroup.add(car.spt);
  }

  for(var i=0;i<40;i++)
  {
    log = new Log(-2);
    logGroup.add(log.spt);
  }



 }

function draw() {
  background("darkblue");


  for(i=1;i<logGroup.length;i++){
    if(logGroup[i].x<0){
      logGroup[i].x=width;
    }
  }

  for(i=1;i<carGroup.length;i++){
    if(carGroup[i].x<0 || carGroup.x>width){
      carGroup[i].x=width;
    }
  }
 
 

  drawSprites();
}

