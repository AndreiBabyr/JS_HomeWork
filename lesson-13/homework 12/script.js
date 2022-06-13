var xInput = document.getElementById('x');
var yInput = document.getElementById('y');
var createBoardBtn = document.getElementById('createBoardBtn');
var board = document.getElementById('board');
var isBlack = false;

xInput.onkeyup = checkIsValuesCorrect;
yInput.onkeyup = checkIsValuesCorrect;
createBoardBtn.onclick = function () {
  createBoard(+xInput.value, +yInput.value);
};
board.onclick = function (event) {
  if (event.target.className.includes('cell')) {
    isBlack = !isBlack;
    renderBoard(+xInput.value, +yInput.value);
  }
};

function checkIsValuesCorrect() {
  if (xInput.value.length && yInput.value.length) createBoardBtn.disabled = false;
  else createBoardBtn.disabled = true;
}

function isFloat(number) {
  return number === number && number % 1 !== 0;
}

function createBoard(x, y) {
  if (x > 10 || y > 10 || x < 1 || y < 1 || isFloat(x) || isFloat(y) || isNaN(x) || isNaN(y))
    return alert('Не верное значение !\Введите целое число от 1 до 10');
  renderBoard(+x, +y);
}

function renderBoard(x, y) {
  board.innerHTML = null;
  board.hidden = false;
  var isCellBlack = isBlack;
  for (var i = 0; i < y; i++) {
    var row = board.insertRow(i);
    for (var j = 0; j < x; j++) {
      if (x % 2 === 0 && j % x === 0) isCellBlack = !isCellBlack;
      var cell = row.insertCell(j);
      cell.className = isCellBlack ? 'cell cell_black' : 'cell';
      isCellBlack = !isCellBlack;
    }
  }
}
