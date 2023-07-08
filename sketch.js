
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(20,160,20,40)
 trex.addAnimation("trex_running",trex_running)
 trex.scale=0.5
 ground=createSprite(10,190,600,20)
}

function draw(){
  background(190)
  if(keyDown("space")){
    trex.velocityY=-8
  }
  trex.velocityY=trex.velocityY+0.5
  trex.collide(ground)
  drawSprites()

}
