var ctx;
//only used to draw canvas
var game = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 960;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    this.canvas.style =
      "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue";
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    //this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};
//start the game
function startGame() {
  game.start();
  ctx = game.context;
  init(ctx);
}
