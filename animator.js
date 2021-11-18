const scale = 2;
const width = 75;
const height = 50;
var img;
var ctx;
var canvasWidth = 960;
var canvasHeight = 600;
var currentSceneNum = 3;
function init(context) {
  ctx = context;
  Characterimg = new Image();
  Characterimg.src = "resources/Character.png";
  speedX = 0;
  speedY = 0;
  move = false;
}
var scene = {
  title: "resources/titlescreen.jpg",
  firstScene: "resources/background.png",
  secondScene: "resources/building1.png",
};
var animate = true;
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
  isColliding: false,
  isCollidingAction: false,
  actionName: null,
  appears: true,
  forward: function () {
    character.currentDirection = 0;
    character.speedY = 7;
    character.move = true;
  },
  backward: function () {
    character.currentDirection = 3;
    character.speedY = -7;
    character.move = true;
  },
  right: function () {
    character.currentDirection = 2;
    character.speedX = 7;
    character.move = true;
  },
  left: function () {
    character.currentDirection = 1;
    character.speedX = -7;
    character.move = true;
  },
  stop: function () {
    character.speedY = 0;
    character.speedX = 0;
    character.move = false;
  },
  stopleft: function () {
    character.speedX = 0;
    character.move = false;
  },
  sprint: function () {
    if (!character.sprinting) {
      character.sprinting = true;
      character.speedX = character.speedX * 2;
      character.speedY = character.speedY * 2;
    }
  },
  action: function () {
    if (character.isCollidingAction) {
    }
  },
  stopsprint: function () {
    character.sprinting = false;
    character.speedX = character.speedX / 2;
    character.speedY = character.speedY / 2;
  },
};
//used to stop player movement into walls and objects
function collideStop(collisionArray) {
  for (obj of collisionArray) {
    if (obj[2][0] == currentSceneNum) {
      if (
        character.posX + character.speedX >= obj[0][0] &&
        +character.posX + character.speedX <= obj[1][0] &&
        character.posY + character.speedY >= obj[0][1] &&
        character.posY + character.speedY <= obj[1][1]
      ) {
        character.isColliding = true;
        return;
      }
    }
  }
  character.isColliding = false;
  return;
}
//used to create player interaction zones
function collideAction(collisionArray) {
  for (obj of collisionArray) {
    console.log(obj[3][0], currentSceneNum == obj[3][0], currentSceneNum);
    if (currentSceneNum == obj[3][0]) {
      if (
        character.posX + character.speedX >= obj[0][0] &&
        +character.posX + character.speedX <= obj[1][0] &&
        character.posY + character.speedY >= obj[0][1] &&
        character.posY + character.speedY <= obj[1][1]
      ) {
        character.isCollidingAction = true;
        return obj[2][0];
      }
    }
  }
  character.isCollidingAction = false;
  return;
}
let currentFrame = 0;
let frameCount = 0;
function drawFrames(
  sceneNum,
  canvasPosX,
  CanvasPosY,
  currentDirection,
  currentFrame
) {
  //background
  if (sceneNum == 1) {
    var background = new Image();
    background.src = scene.title;
    ctx.drawImage(background, 0, 0);
    titleImg = new Image();
    titleImg.src = "resources/Title.png";
    ctx.drawImage(titleImg, 150, 0);
    ctx.font = "bold 60px Courier New";
    ctx.fillText("Press B to Start", 230, 450);
    ctx.font = "bold 30px Courier New";
    ctx.fillText("Click to pause/play music", 250, 560);
  }
  //Draw Character
  if (sceneNum == 2) {
    var background = new Image();
    background.src = scene.firstScene;
    ctx.drawImage(background, 0, 0);
    if (character.appears) {
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
            40
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
            40
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
            40
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
            40
          );
          break;
      }
    }
  }
  if (sceneNum == 3) {
    var background = new Image();
    background.src = scene.secondScene;
    ctx.drawImage(background, 0, 0);
    if (character.appears) {
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
            40
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
            40
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
            40
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
            40
          );
          break;
      }
      console.log(canvasPosX," ",CanvasPosY);
    }
  }
  if (character.isCollidingAction) {
    switch (character.actionName) {
      case "door1":
        let img = new Image();
        img.src = "resources/DoorOpen.png";
        ctx.drawImage(img, 0, 0, 20, 20, 418, 280, 32, 32);
        var audio = new Audio("sound/door_enter.wav");
        audio.loop = false;
        audio.load();
        setTimeout(function () {
          audio.play();
        }, 100);
        character.appears = false;
        currentSceneNum = 3;
        setTimeout(function () {
          character.appears = true;
          game.clear();
        }, 100);
        break;
      default:
        break;
    }
  }
}

//collisionArray stores values for areas player cannot walk into,
var collsionArray = [
  [[305, 215], [525, 280], [2]],
  [[-5, -5], [944, 215], [2]],
  [[350,300],[480,325],[3]],
  [[456],[],[]]
];
//collision action detects when you can act, passes interaction id to decide what and who interacted
var collisionAction = [[[392, 286], [440, 290], ["door1"], [2]]];
function step() {
  if (animate) {
    //control framerate
    //stop character from moving out of frame
    collideStop(collsionArray);
    character.actionName = collideAction(collisionAction);
    if (!character.isColliding) {
      character.posX += character.speedX;
      character.posY += character.speedY;
    }
    //draw screen
    drawFrames(
      currentSceneNum,
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
}
