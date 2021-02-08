const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var bg,bg1

function preload(){
  polygon_img=loadImage("polygon.png");
  bg = loadImage("Sprites/bg.jpg");
  bg1 = loadImage("Sprites/bg1.jpg");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //block set 2 
  //level one
  blockno1 = new Block(640,175,30,40);
  blockno2 = new Block(670,175,30,40);
  blockno3 = new Block(700,175,30,40);
  blockno4 = new Block(730,175,30,40);
  blockno5 = new Block(760,175,30,40);
  //level two
  blockno6 = new Block(670,135,30,40);
  blockno7 = new Block(700,135,30,40);
  blockno8 = new Block(730,135,30,40);
  //level 3
  blockno9 = new Block(700,95,30,40);

  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(bg,bg1); 
 
  
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("Press Space to get a second Chance to Play!!",480 ,350);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("limegreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("lightblue");
  blockno1.display();
  blockno2.display();
  blockno3.display();
  blockno4.display();
  blockno5.display();
  fill("yellow");
  blockno6.display();
  blockno7.display();
  blockno8.display();
  fill("orange");
  blockno9.display();
  fill(166);
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "Sprites/bg.jpg"
  } else {
      bg = "Sprites/bg1.jpg"
  }
  backgroundImg = loadImage(bg);
 
}