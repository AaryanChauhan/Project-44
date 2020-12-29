var backgroundImg;
var santaImg;
var kid1Img;
var kid2Img;
var kid3Img;
var kid4Img;
var gift1Img;
var gift2Img;
var gift3Img;
var backgroundSprite;
var santa;
var kid1,kid2,kid3,kid4;
var gift1,gift2,gift3;
var santaJumping;
var ground;


function preload(){
  backgroundImg = loadImage("images/background_img.jpg");
  santaImg = loadImage("images/santa_Img.png");
  kid1Img = loadImage("images/kid_1.png");
  kid2Img = loadImage("images/kid_2.png");
  kid3Img = loadImage("images/kid_3.png");
  kid4Img = loadImage("images/kid_4.png");
  gift1Img = loadImage("images/gift_1.png");
  gift2Img = loadImage("images/gift_2.png");
  gift3Img = loadImage("images/gift_3.png");
  santaJumping = loadImage("images/santa_Jumping.png");
}


function setup(){
  var canvas = createCanvas(800,600);

  backgroundSprite = createSprite(400,300,500,50);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.velocityX = -5;
  backgroundSprite.scale = 1;

  santa = createSprite(100,500,25,25);
  santa.addImage(santaImg);
  santa.scale = 0.5;

  ground = createSprite(400,590,800,20);
  

}


function draw(){
  background(255);

  if(backgroundSprite.x < 0){
    backgroundSprite.x = backgroundSprite.width/2;
  }

  if(keyCode === 32 && santa.y >= 400){
    //santa.changeAnimation("jumping",santaJumping);
    santa.velocityY = -5;
  }

  santa.velocityY = santa.velocityY + 0.8;

  santa.collide(ground);
  
  drawSprites();
}