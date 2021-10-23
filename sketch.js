var City
var boy
var BoyRunning
var Obstacle
var key
var Score=0

function preload(){
  City =loadImage("City Bg For School Runner Game.png");
  Running = loadImage("Boy_Running.PNG")
  Obstacle = loadImage("Barricade.png")
  Obstacle1 = loadImage("Barricade.png")
  Key_Img = loadImage("Key.png")
}




function setup() {
  createCanvas(windowWidth,635);
  Bg = createSprite(770,300,2500,1080)
  Bg.addImage(City)
  Boy = createSprite(200,530,10,10);
  Boy.addImage(Running)
  Boy.scale=0.35
  Bar = createSprite(700,580,10,10);
  Bar1 = createSprite(1150,580,10,10);
  Bar.addImage(Obstacle)
  Bar1.addImage(Obstacle1)
  Key = createSprite(1450,550,10,10)
  Key.addImage(Key_Img)
  Bar.scale=0.225
  Bar1.scale=0.225
  Key.scale=0.225
  Bg.scale=1.0
  Ground = createSprite(635,633,windowWidth+1000,5)
  Boy.setCollider("circle",0,0,250)
  Bar.setCollider("circle",0,0,75)
  Bar1.setCollider("circle",0,0,75)


  

  

}

function draw() {
  background("black"); 
  Boy.collide(Ground)
  if(keyDown("space") && Boy.y >=  500 ) {
    Boy.velocityY = -20;
  }
  if (keyDown(RIGHT_ARROW)) {
    Boy.x = Boy.x+5
  }
  if (keyDown(LEFT_ARROW)) {
    Boy.x = Boy.x-5
  }
  if (Boy.isTouching(Bar)){
    Boy.x=200
    Boy.y=530
    Score=Score-1
  }
  if (Boy.isTouching(Bar1)){
    Boy.x=200
    Boy.y=530
    Score=Score-1
  }
  if (Boy.isTouching(Key)){
    Score=Score+1
  }
  if (Boy.isTouching(Bar1)){
    Score=Score-1
  }
  if (Boy.isTouching(Key)){
    Boy.x=200
    Boy.y=530
  }
  Boy.velocityY = Boy.velocityY + 0.8
  drawSprites();
  textSize(30)
  fill("Black")
  text("Score:"+Score,10,25)

}