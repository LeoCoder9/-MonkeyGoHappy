
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

var survivaltime = 0;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(440, 500)
  
  ground = createSprite(400, 400, 400, 60)
  monkey = createSprite(80, 368, 10, 10)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  
  ground.shapeColor = ("darkgreen")
  
  FoodGroup = createGroup();
  
  obstacleGroup = createGroup();
  
}


function draw() {
 background("white")
  
  
  monkey.collide(ground);
  
  
  if(keyWentDown("space")){
    monkey.velocityY = -42;
    
  }
  
  if(ground.x<0){
    ground.x = ground.width/2
    
  }
  
  
  ground.x = ground.width/2
  
  
  monkey.velocityY = monkey.velocityY + 4;
  
  textSize(20);
  fill("black");
  stroke("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: " + survivaltime, 160, 50);
  
  bananas();
  
  obstacles();
  
  drawSprites();
}


  function bananas(){
  if(frameCount % 80 === 0){
    banana = createSprite(440, 250, 10, 10)
    banana.velocityX = -6
    banana.addImage(bananaImage)
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
  
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(450, 350, 10, 10)
    obstacle.velocityX = -9
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }

  
}



