// mouse를 canvas 위에 두면 이를 감지할 수 있어야 한다.
const canvas = document.getElementById("jsCanvas");

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMode(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    painting = true;    
}

function onMouseUp(event) {
    stopPainting();
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMode);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}