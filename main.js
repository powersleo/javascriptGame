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
    var img = new Image();
    var title = new Image();
    title.src = "resources/Titlescreen.png";
    img.src = "resources/download.jpg";
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.frameNo = 0;
    img.addEventListener(
      "load",
      function () {
        this.context.drawImage(img, 0, 0);
      },
      false
    );
    img.src = "resources/download.jpg";
    this.context.drawImage(title, 0, 0);
    this.context.drawImage(img, 0, 0);
    this.context.drawImage(title, 0, 0, 0, 0, 0, 0, 0, 0);
    //this.interval = setInterval(updateGambeArea, 20);
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
}
function changeMap() {
  game.clear();
}
