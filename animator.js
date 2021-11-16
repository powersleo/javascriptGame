// var img = new Image();
// img.src = "resources/Character.js";
const scale = 2;
const width = 75;
const height = 50;
var img;
var ctx;
var canvasWidth = 960;
var canvasheight = 600;
function init(ctx) {
  ctx = ctx;
  Characterimg = new Image();
  Characterimg.src = "resources/Character.png";
  window.requestAnimationFrame(step);
  posX = 0;
  posY = 0;
  speedX = 0;
  speedY = 0;
  move = false;
}
var character = {
  forwardFramesX: [0, 64, 128, 192],
  forwardFramesY: [0, 1, -1, 1],
  leftFramesX: [0, 64, 128, 192],
  leftFramesY: [63, 63, 63, 61],
  rightFramesX: [2, 66, 130, 194],
  rightFramesY: [127, 127, 127, 125],
  backFramesX: [0, 64, 128, 192],
  backFramesY: [191, 193, 191, 193],
  frame: [34, 50],
  move: 0,
  speedX: 0,
  speedY: 0,
  posX: 0,
  posY: 300,
  currentDirection: 0,
  sprinting: false,
  forward: function() {
    character.currentDirection = 0;
    character.speedY = 5;
    character.move = true;
  },
  backward:function() {
    character.currentDirection = 3;
    character.speedY = -5;
    character.move = true;
  },
  right:function () {
    character.currentDirection = 2;
    character.speedX = 5;
    character.move = true;
  },
  left:function () {
    character.currentDirection = 1;
    character.speedX = -5;
    character.move = true;
  },
  stop:function () {
    character.speedY = 0;
    character.speedX = 0;
    character.move = false;
  },
  stopleft:function () {
    character.speedX = 0;
    character.move = false;
  },
  sprint:function (){
    if(!character.sprinting){
      character.sprinting = true;
      character.speedX = character.speedX * 2;
      character.speedY = character.speedY * 2;
    }
  },
  stopsprint:function (){
    character.sprinting=false;
    character.speedX = character.speedX / 2;
    character.speedY = character.speedY / 2;
  }
};

var currentFrame = 0;
let frameCount = 0;
function drawFrames(canvasPosX, CanvasPosY, currentDirection, currentFrame) {
  //background 
  var background = new Image();
  background.src = "resources/background.png";
  ctx.drawImage(background, 0, 0);
  //bushes
  var bushBot = new Image();
  var bushTop = new Image();
  bushTop.src = "resources/TallGrassTop.png";
  bushBot.src = "resources/TallGrassBot.png";
  ctx.drawImage(bushBot,5,405,25,25);
  ctx.drawImage(bushBot,5,430,25,25);
  ctx.drawImage(bushBot,5,455,25,25);
  ctx.drawImage(bushBot,5,480,25,25);
  ctx.drawImage(bushBot,5,505,25,25);
  //Draw Character
  switch (currentDirection) {
    case 0:
      ctx.drawImage(
        Characterimg,
        character.forwardFramesX[currentFrame],
        character.forwardFramesY[currentFrame],
        character.frame[0],
        character.frame[1],
        canvasPosX,
        CanvasPosY,
        30,
        50
      );
      break;
    case 1:
      ctx.drawImage(
        Characterimg,
        character.leftFramesX[currentFrame],
        character.leftFramesY[currentFrame],
        character.frame[0],
        character.frame[1],
        canvasPosX,
        CanvasPosY,
        30,
        50
      );
      break;
    case 2:
      ctx.drawImage(
        Characterimg,
        character.rightFramesX[currentFrame],
        character.rightFramesY[currentFrame],
        character.frame[0],
        character.frame[1],
        canvasPosX,
        CanvasPosY,
        30,
        50
      );
      break;
    case 3:
      ctx.drawImage(
        Characterimg,
        character.backFramesX[currentFrame],
        character.backFramesY[currentFrame],
        character.frame[0],
        character.frame[1],
        canvasPosX,
        CanvasPosY,
        30,
        50
      );
      break;
  }
  ctx.drawImage(bushTop,5,400,25,25);
  ctx.drawImage(bushTop,5,425,25,25);
  ctx.drawImage(bushTop,5,450,25,25);
  ctx.drawImage(bushTop,5,475,25,25);
  ctx.drawImage(bushTop,5,500,25,25);


}
function step() {
  frameCount++;
  //control framerate
  if (frameCount < 10) {
    window.requestAnimationFrame(step);
    return;
  }
  frameCount = 0;
  ctx.clearRect(character.posX, character.posY, 34, 50);
  window.requestAnimationFrame(step);
  //stop character from moving out of frame
  console.log(character.posX, character.posY);
  if (
    character.posX + character.speedX >= 0 &&
    character.posY + character.speedY >= 0 &&
    character.posX + character.speedX <= canvasWidth - 20 &&
    character.posY + character.speedY >= 215
  ) {
    character.posX += character.speedX;
    character.posY += character.speedY;
  }
  //draw screen
  drawFrames(
    character.posX,
    character.posY,
    character.currentDirection,
    currentFrame
  );
  //stop animation of character is not moving
  if (character.move) {
    currentFrame++;
  }
  //loop frame
  if (currentFrame >= 4) {
    currentFrame = 0;
  }
}
