var xInput = document.getElementById('x');
var yInput = document.getElementById('y');
var createBoardBtn = document.getElementById('createBoardBtn');
var board = document.getElementById('board');
var isBlack = false;

xInput.onkeyup = checkIsValuesCorrect;
yInput.onkeyup = checkIsValuesCorrect;
createBoardBtn.onclick = function () {
  createBoard(xInput.value, yInput.value);
};
board.onclick = function (event) {
  if (event.target.classList.contains('cell')) {
    isBlack = !isBlack;
    renderCells(xInput.value * yInput.value, xInput.value);
  }
};

function checkIsValuesCorrect() {
  if (+xInput.value && +yInput.value) createBoardBtn.removeAttribute('disabled');
  else createBoardBtn.setAttribute('disabled', '1');
}

function createBoard(x, y) {
  if (!x || !y || x > 10 || y > 10) return alert('Incorrect value! Value should be from 1 to 10');
  board.style.gridTemplateColumns = 'repeat(' + x + ', ' + '1fr' + ')';
  board.style.display = 'grid';
  renderCells(x * y, x);
}

function renderCells(cellCount, width) {
  var cells = '';
  var isCellBlack = isBlack;

  for (var i = 0; i < cellCount; i++) {
    if (width % 2 === 0 && i % width === 0) isCellBlack = !isCellBlack;
    var additionalCellClass = isCellBlack ? ' cell_black' : '';
    cells += '<div class="' + 'cell' + additionalCellClass + '"></div>';
    isCellBlack = !isCellBlack;
  }
  board.innerHTML = cells;
}
