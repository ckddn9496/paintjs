/*** mouse를 canvas 위에 두면 이를 감지할 수 있어야 한다.
 * Canvas를 사용하기 위해 pixel 을 지정해주어야 한다.
*/
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d'); // context of canvas: context is what control canvas
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");


const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;
// pixel 을 먼저 지정한다
// css에서 지정해준 size는 화면에 보이기 위한 pixel 이라면
// 아래 초기화 해주는 pixel은 js에서 canvas element가 pixel을
// 이용하기 위해 알아야 하는 가로, 세로 픽셀의 개수이다.
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;    //  init line color
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;            //  init line width

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) { // detect all the movement and draw a line
    const x = event.offsetX;
    const y = event.offsetY;

    if (!painting) {
        ctx.beginPath(); // create new path
        ctx.moveTo(x, y); // move starting point of a new sub-path line to (x, y)
    } else if (!filling){
        ctx.lineTo(x, y); // create line
        ctx.stroke(); // draw current sub-path with the current stroke style
    }
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(event) {
    if (filling) {
        filling = false;
        mode.innerText = "FILL"
    } else {
        filling = true;
        mode.innerText = "PAINT"
    }
}

function handleCanvasClick(event) {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick(event) {
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image
    link.download = "PaintJS[EXPORT]";
    link.click();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    // fill
    canvas.addEventListener("click", handleCanvasClick);

    // context menu (우클릭)
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);


if (range) {
    range.addEventListener("input", handleRangeChange);
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}