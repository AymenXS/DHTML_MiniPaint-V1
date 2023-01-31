const canvas = document.getElementById("canvas"),
  colorBtns = document.querySelectorAll(".colorField"),
  colorPicker = document.querySelector(".colorPicker"),
  penWidth = document.querySelector(".penWidth");

canvas.width = window.innerWidth - 60;
canvas.height = 400;

let context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(0, 0, canvas.width, canvas.height);

let drawColor = "black";
let drawWidth = "2";
let isDrawing = false;

canvas.addEventListener("mousedown", start, false);
canvas.addEventListener("mousemove", draw, false);
canvas.addEventListener("mouseup", stop, false);
canvas.addEventListener("mouseout", stop, false);

function start(event) {
  isDrawing = true;
  context.beginPath();
  event.preventDefault();
}

function draw(event) {
  if (isDrawing) {
    context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    context.strokeStyle = drawColor;
    context.lineWidth = drawWidth;
    context.stroke();
  }
  event.preventDefault();
}

function stop() {
  if (isDrawing) {
    context.stroke();
    isDrawing = false;
  }
}

colorBtns.forEach((button) => {
  button.addEventListener("click", changeColor);
});

colorPicker.addEventListener("input", changeColorPicker);
penWidth.addEventListener("input", changeWidth);

function changeColor() {
  drawColor = this.style.background;
}

function changeColorPicker() {
  drawColor = this.value;
}

function changeWidth() {
  drawWidth = this.value;
}
