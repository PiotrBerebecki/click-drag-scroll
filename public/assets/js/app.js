console.clear();


let startX;
let scrollLeft;
let isMouseDown = false;
const itemsDOM = document.querySelector('.items');


itemsDOM.addEventListener('mousedown', setupScroll);
itemsDOM.addEventListener('mouseleave', finishScroll);
itemsDOM.addEventListener('mouseup', finishScroll);
itemsDOM.addEventListener('mousemove', scroll);


function setupScroll(e) {
  isMouseDown = true;
  itemsDOM.classList.add('active');
  startX = e.pageX - itemsDOM.offsetLeft;
  scrollLeft = itemsDOM.scrollLeft;
}


function finishScroll(e) {
  isMouseDown = false;
  itemsDOM.classList.remove('active');
}


function scroll(e) {
  if (!isMouseDown) { return; }
  e.preventDefault();

  const currentX = e.pageX - itemsDOM.offsetLeft;
  const distanceTravelled = (currentX - startX) * 4;
  itemsDOM.scrollLeft = scrollLeft - distanceTravelled;
}
