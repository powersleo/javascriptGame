
var character;
var game = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 780;
    this.canvas.height = 480;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};
function startGame() {
  character = new component(
    30,
    30,
    "resources/player_standing.png",
    10,
    120,
    "image"
  );
  game.start();
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = game.context;
    if (type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };
  this.newPos = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  game.clear();
  character.newPos();
  character.update();
}

function moveup() {
  character.speedY = -1.2;
}

function movedown() {
  character.speedY = 1.2;
}

function moveleft() {
  character.speedX = -1.2;
}

function moveright() {
  character.speedX = 1.2;
}

function clearmove() {
  character.speedX = 0;
  character.speedY = 0;
}
function jump() {
  character.speedX = 0;
  character.speedY = -5;
}

//Player movement
function controlKeydown(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "w":
      moveup();
      break;
    case "s":
      movedown();
      break;
    case "d":
      moveright();
      break;
    case "a":
      moveleft();
      break;
    case "Up":
    case "ArrowUp":
      break;
    case "Down":
    case "ArrowDown":
      break;
    case " ":
    case "Spacebar":
      jump();
      break;
    default:
      return;
  }
  event.preventDefault();
}
function controlKeyup(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "w":
      clearmove();
      break;
      d;
    case "s":
      clearmove();
      break;
    case "d":
      clearmove();
      break;
    case "a":
      clearmove();
      break;
    case "Spacebar":
      clearmove();
      s;
      break;
    case "Up":
    case "ArrowUp":
    case "Down":
    case "ArrowDown":
      break;
    default:
      return;
  }
  event.preventDefault();
}
window.addEventListener(
  "keydown",
  function (event) {
    controlKeydown(event);
  },
  true
);
window.addEventListener(
  "keyup",
  function (event) {
    controlKeyup(event);
  },
  true
);
