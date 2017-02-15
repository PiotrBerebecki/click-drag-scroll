console.clear();


let prevPosX;
let isMouseDown = false;
let scrollLeft;
const itemsDOM = document.querySelector('.items');

itemsDOM.addEventListener('mousedown', handleMouseDown);
itemsDOM.addEventListener('mouseup', handleMouseUp);
itemsDOM.addEventListener('mousemove', scroll);


function handleMouseDown() {
  isMouseDown = true;
  this.classList.add('.active');
}

function handleMouseUp() {
  isMouseDown = false;
  this.classList.remove('.active');
}

function scroll(e) {
  if (!isMouseDown) { return; }

  console.log(e.clientX);

}
