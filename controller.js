function controlKeydown(event) {
  if (event.defaultPrevented) {
    return;
  }
  switch (event.key) {
    case "b":
      currentSceneNum = 2;
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
      character.action();
      break;
    case "l":
      //character b button
      break;
    // case "Shift":
    //   sprint();
    //   break;
    case "Up":
    case "ArrowUp":
      break;
    case "Down":
    case "ArrowDown":
      break;
    case " ":
    // case "Spacebar":
    //   jump();
    //   break;
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
    // case "Shift":
    //   stopSprint();
    //   break;
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

