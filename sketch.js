var box,play;
var gameState,start;

function setup(){
    canvas=createSprite(800,800);
    //box=createSprite(200,200,10,10);
    //box.shapeColor="red";
    gameState=start;
}

function draw(){
    background(255,0,0);
    
  play();
    
    drawSprites();
}

function play(){
      if (gameState="start"){
        textSize(30);
        fill(255);
        text("Get Ready For",100,150);

        textSize(30);
        fill(255);
        text("this EYE-Testing process!!",30,190);

        if(keyDown("UP_ARROW")){
          gameState="page1";
          console.log("check");
         }
        }
      }
