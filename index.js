let numberOfDrumBoxes = document.querySelectorAll("button").length;

for (i = 0; i < numberOfDrumBoxes; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let sound = new Audio("sounds/tom-1.mp3");
    sound.play();
  });
}
