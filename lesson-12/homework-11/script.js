var table = document.getElementById('table');
var addRowBtn = document.getElementById('add-row');

table.onclick = function (event) {
  var target = event.target;

  if (target.tagName === 'TD' && !target.id) {
    handleTdClick(target);
  }
};

addRowBtn.onclick = function () {
  var row = table.insertRow(table.rows.length - 1);
  row.insertCell(0);
  row.insertCell(1);
  row.insertCell(2);
};

function handleTdClick(td) {
  var currentText = td.innerText || '';
  var input = document.createElement('input');
  input.value = currentText;
  td.innerHTML = null;
  td.append(input);
  input.focus();
  input.onblur = function () {
    td.innerHTML = input.value;
  };
  input.onkeyup = function (event) {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };
}
