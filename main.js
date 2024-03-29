var ctx;
//only used to draw canvas
var audio = new Audio("sound/main-theme.ogg");
audio.loop = false;
audio.load();
//used to draw canvas and set frame rate
var game = {
  canvas: document.createElement("canvas"),
  frameNo: 0,
  start: function () {
    this.canvas.width = 960;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    this.canvas.style =
      "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
    this.canvas.onc;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    init(this.context);
    window.requestAnimationFrame(gameLoop);
    function gameLoop() {
      //issue with some processors/ screen refresh rates being inconsistent across different computers
      //if frame rate feels too slow or fast raise 5 to higher or lower
      if (game.frameNo > 5) {
        step();
        game.frameNo = 0;
      }
      game.frameNo++;
      window.requestAnimationFrame(gameLoop);
    }
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
}
//start the game
function startGame() {
  game.start();
}

//used to play music on the title screen
function startMusic() {
  switch (currentSceneNum) {
    case 1:
      audio.volume = 0.2;
      console.log(audio.paused);
      if (audio.paused) {
        audio.play();
        audio.paused = false;
      } else {
        audio.pause();
      }
      break;
  }
}
document.body.addEventListener("click", function () {
    startMusic();
  
});
