//This function is used to control the character with the keyboard
var time = 0;
var enabled = true;
//handles keyboard, keypress down
function controlKeydown(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "b":
      if(currentSceneNum ==1 ){
        currentSceneNum = 2;
      }
      break;
    case "w":
      character.backward();
      break;
    case "s":
      character.forward();
      break;
    case "d":
      character.right();
      break;
    case "a":
      character.left();
      break;
    case "k":
      break;
    case "l":
      //character b button
      break;
    case "Up":
    case "ArrowUp":
      break;
    case "Down":
    case "ArrowDown":
      break;
    case " ":

    default:
      return;
  }
  event.preventDefault();
}
//handles keyboard key press up
function controlKeyup(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "w":
      character.stop();
      break;
    case "s":
      character.stop();
      break;
    case "d":
      character.stop();
      break;
    case "a":
      character.stop();
      break;
    case "Spacebar":
      character.stop();
      break;
    case "k":
      clicktext();
      character.action();
      break;
    case "l":
        develop();
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
