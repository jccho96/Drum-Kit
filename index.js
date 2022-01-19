let numberOfDrumBoxes = document.querySelectorAll("button").length;

for (i = 0; i < numberOfDrumBoxes; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("I am clicked");
  });
}
