# paintjs
Painting board made with VanillaJS
-------------------------------
## what I learned

css using reset.css
- https://meyerweb.com/eric/tools/css/reset/

css 파일을 import
- @import "reset.css"

Elements to Array
- Array.from(elements): 배열의 형태로 가져옴

마우스 관련 이벤트
- mousemove
- mousedown
- mouseup
- mouseleave

마우스 우 클릭
- contextmenu
    -   preventDefault() 로 우 클릭을 막을 수 있다.

Canvas
- Canvas 내부에 Context를 가진다. 이 Context를 이용하여 그림을 그려나간다
- Canvas를 사용할 때 필수적으로 pixel 크기를 설정해 주자. ctx.width&&height
- 선: Stroke, 채우기: fill

Canvas 이미지 저장시 Create Fake Element
```javascript
function handleSaveClick(event) {
    const image = canvas.toDataURL();           // get image download url. it'll be attr in href
    const link = document.createElement("a");   // for download
    link.href = image                           // set attr
    link.download = "PaintJS[EXPORT]";          // file name
    link.click();                               // emit click event -> download to user's pc
}
```
