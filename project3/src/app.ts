const button = document.querySelector("button");

function clickHandler() {
  console.log("Clicked!");
}

if (button) {
  button.addEventListener("click", clickHandler);
}
