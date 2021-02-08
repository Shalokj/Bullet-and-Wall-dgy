var bullet ,thickness,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 
  speed=random(223,331);
  weight=random(30,52);

 bullet=createSprite(50,200,50,50)
  wall=createSprite(1400,200,thickness,height/2)
bullet.velocityX=speed
thickness=random(23,80);
  
 wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  


if (hasCollided(bullet,wall)){
  bullet.velocityX=0
  var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness)
  if(damage>180){

    car.shapeColor=color(255,0,0);

  }
if(damage>10){

   wall.shapeColor=color(255,0,0);

}
if(damage<10){

wall.shapeColor=color(0,255,0);

}


}

  drawSprites();
}
function hasCollided(bullet,wall)
{
 bulletRightEdge = bullet.x + bullet.width;
 wallLeftEdge= wall.x;

if(bulletRightEdge>=wallLeftEdge){

return true

}
return false;

}
