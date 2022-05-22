// 1
var arr = [-1, 0, 2, 34, -2];

var filterNumbersArr = arr.filter(function(numbers) {
  return numbers > 0;
});

console.log(filterNumbersArr);

// 2 
var numbers = [-5, -1, 0, 5, 9, -7];

var positiveNumber = numbers.find(function(number){
  return number > 0;
});

console.log(positiveNumber);

// 3 
function isPalidrome(str) {
  return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');
}

isPalidrome('шалаШ');

// 4
var sorting = function(str) {
  return str.toLowerCase().split('').sort().join('');
}

var areAnagram = function(string1, string2) {
  return sorting(string1) === sorting(string2);
}
areAnagram('кот', 'Отк');

// 5

function divideArr(arr, elem) {
  var result = [];

  for (i = 0, cut = elem; i < arr.length; i += elem, cut += elem)
      result.push(arr.slice(i, cut));
  return result;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

// 6

function degreeTwo(n) {
    
  if (n > 1) {
  return degreeTwo(n/2); 
  } else if (n == 1) {
  return true;
  } else if (n < 1) 
  return false;
}

console.log(degreeTwo(8));
console.log(degreeTwo(10));


