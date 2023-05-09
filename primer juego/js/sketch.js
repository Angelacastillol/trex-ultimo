//Trex juego multiplayer
var trex1,trexRunning1,trexCollided1,down1;//player1
var trex2,trexRunning2,trexCollided2,down2;//player2

var ground, invisibleGround, groundImage;
var nube, cloud;
var obstacleImg, obstacle2Img, obstacle3Img, obstacle4Img, obstacle5Img, obstacle6Img
var score=0;
var obstacleGroup;
var gameState = "serve";
var play = 1;
var end = 0;
var restartImg, restart;
var gameOverImg, gameOver;
var NubesGroup;
var muerte, checkPoint, jump;


function preload(){
//carga de imagenes checa librerias y revision del p5.js, o error de ortografia
 trexRunning1 = loadAnimation("./assets/trex1.png", "./assets/trex3.png", "./assets/trex4.png");
  //trexcollided1 = loadAnimation("trex_collided.png");
 groundImage = loadImage("/assets/ground2.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight/2);
  //console.log(windowWidth);
  trex1=createSprite(150, 180, 60, 70);
  trex1.shapeColor="blue";
  trex2=createSprite(150, 120, 60, 70);
  trex2.shapeColor="red";
  ground=createSprite(windowWidth/2, 390, windowHeight, 20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  invisibleGround = createSprite(300,190,600,10);
  invisibleGround.visible=false;

}

function draw() {
  background(209);  



  drawSprites();
}