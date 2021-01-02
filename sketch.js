var bullet,thickness;
var wall,weight,speed;








function setup() {
  createCanvas(1600,400);
  
  bullet=createSprite(200,200,30,15);
  bullet.shapeColor='white';

  wall=createSprite(1200,200,thickness,height/2);

  speed=random(223,321);
  
  
  bullet.velocityX=speed;

  
  weight=random(32,51);
  thickness=random(22,83);


}

function draw() {
  background('black');  

  if(hasCollided(bullet,wall))

  {

   bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness
    if(damage>10){
      bullet.shapeColor=color('red');
      wall.shapeColor=color('white');
    }
    if(damage<10){
      bullet.shapeColor=color('green');
      wall.shapeColor=color('white');
    }
    
    
  }
  if(bullet.isTouching(wall)){
    bullet.velocityX=0;
  }

  
  drawSprites();
}

function hasCollided(){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true ;
  }
    return false ;
  
}