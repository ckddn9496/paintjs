/*** mouse를 canvas 위에 두면 이를 감지할 수 있어야 한다.
 * Canvas를 사용하기 위해 pixel 을 지정해주어야 한다.
*/
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d'); // context of canvas: context is what control canvas

// pixel 을 먼저 지정한다
// css에서 지정해준 size는 화면에 보이기 위한 pixel 이라면
// 아래 초기화 해주는 pixel은 js에서 canvas element가 pixel을
// 이용하기 위해 알아야 하는 가로, 세로 픽셀의 개수이다.
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";    //  init line color
ctx.lineWidth = 2.5;            //  init line width

let painting = false;

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
    } else {
        ctx.lineTo(x, y); // create line
        ctx.stroke(); // draw current sub-path with the current stroke style
    }
}

function onMouseDown(event) {
    painting = true;    
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}