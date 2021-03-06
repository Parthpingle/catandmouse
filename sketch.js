var bgImage,tom,jerry;
var tomImage1,tomImage2,tomImage3,jerryImage1,jerryImage2,jerryImage3;

function preload() {
    //load the images here
    bgImage = loadImage("../images/garden.png");
    tomImage1 = loadAnimation("images/cat1.png");
    tomImage2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomImage3 = loadAnimation("images/cat4.png");
   jerryImage1 = loadAnimation("images/mouse1.png");
   jerryImage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   jerryImage3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600,50,50);
    tom.addAnimation("tomSleeping",tomImage1);
    tom.scale = 0.2;
    jerry = createSprite(200,600,50,50);
    jerry.addAnimation("jerryStanding",jerryImage1);
    jerry.scale = 0.2;


}

function draw() {
  background(bgImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("tomLast",tomImage3);
      tom.scale = 0.2;
      tom.changeAnimation("tomLast")

      jerry.addAnimation("jerryLast",jerryImage3);
      jerry.scale = 0.2;
      jerry.changeAnimation("jerryLast")
    }

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode === LEFT_ARROW){
  tom.velocityX = -5;
  tom.addAnimation("tomRunning",tomImage2);
  tom.changeAnimation("tomRunning");

  jerry.addAnimation("jerryTeasing",jerryImage2);
  jerry.changeAnimation("jerryTeasing");
}


}
