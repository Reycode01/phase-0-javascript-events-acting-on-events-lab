const dodger = document.getElementById('dodger');

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const left = dodger.style.left.replace('px', '');
  const leftPosition = parseInt(left, 10);

  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 1}px`;
  }
}

function moveDodgerRight() {
  const left = dodger.style.left.replace('px', '');
  const leftPosition = parseInt(left, 10);
  const rightEdge = 360; // Right edge of the game field

  if (leftPosition < rightEdge) {
    dodger.style.left = `${leftPosition + 1}px`;
  }
}
