
    var iss = false;
    var spacecraft = false;
    var hadDocked = false;

function preload(){
    issImg = loadImage("iss.png")
    bgImg = loadImage("spacebg.jpg")
    spaceCraftImg = loadImage("spacecraft1.png")
    bothSideSmokeImg = loadImage("spacecraft2.png")
    rightSmokeImg = loadImage("spacecraft4.png")
    leftSmokeImg= loadImage("spacecraft3.png")
  }

  function setup() {
    createCanvas(800, 800);
  
    bgImg= createSprite(50, width/2, 100,height);
    bgImg.addImage(backBoardImg);
 
    iss= createSprite(100, 750, 50,50);
  iss.addImage(issImg);
  iss.scale=0.2;

  spacecraft= createSprite(100, height/2, 50,50);
  spacecraft.addImage(spaceCraftImg);
  spacecraft.scale=0.2;
  }

  function draw() {
     
      if (!hasDocked){
          spacecraft.position(random(50, 200), height/2, 50, 50);
      }
      if(keyIsDown(LEFT_ARROW)){
        spacecraft.addImage(leftSmokeImg);
        spacecraft.position(spacecraft.positionX-20, height/2, 50, 50);
      }
      if(keyIsDown(RIGHT_ARROW)){
        spacecraft.addImage(rightSmokeImg);
        spacecraft.position(spacecraft.positionX+20, height/2, 50, 50);
      }
      if(keyIsDown(DOWN_ARROW)){
        spacecraft.addImage(bothSideSmokeImg);
      }
      if(keyIsDown(UP_ARROW)){
        spacecraft.position(spacecraft.positionX, height/2+20, 50, 50);
      }
      if(spacecraft.position === iss.position){
          hasDocked = true;
          text("Docking Successful", 600, 100)
      }
  }
  