var img = document.querySelector("#bob");

var moveX = 0;
var moveY = 0;

document.addEventListener("keydown", (dets) => {
  if (dets.code == "ArrowRight" && moveX < 86) {
    moveX++;
    img.style.left = moveX + "%";
  } else if (dets.code == "ArrowLeft" && moveX > 1) {
    moveX--;
    img.style.left = moveX + "%";
  } else if (dets.code == "ArrowUp" && moveY > 1) {
    moveY--;
    img.style.top = moveY + "%";
    console.log("other key");
  } else if (dets.code == "ArrowDown" && moveY < 67) {
    moveY++;
    img.style.top = moveY + "%";
    console.log(moveY);
  } else {
    console.log("other key");
  }
});
