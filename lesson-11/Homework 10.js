// 1

function nameArrayToObjectArray(nameArray) {
    
    return nameArray.map(function(name) {
      return {name: name};
    })
}

nameArrayToObjectArray(['Vasya', 'Petya']);

// 2

function transformArr(array) {
    
    return array.reduce(function (item1, item2) {
      return item1 + ' ' + ':' + ' ' + item2;
    }, 'Текущее время');
}

transformArr(['00', '13', '24']);

// 3

function countVowelLetters(string) {
    var vowelLetters = [ 'а', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    
    return string.split('').reduce(function (acc, letter) {
      if (vowelLetters.includes(letter)) return acc += 1;
      else return acc
    }, 0);
}

countVowelLetters('Привет, как дела ?');

// 4

function countSentencesLetters(string) {
    var sentences = string.split(/\s?[!\.\?]\s?/).filter(function (sentence) {
      return sentence;
    });
  
    var getSentenceLength = function (sentence) {
      return sentence.split('').reduce(function (acc, char) {
        if (![' ', ','].includes(char)) return (acc += 1);
        else return acc;
      }, 0);
    };
  
    sentences.forEach(function (sentence) {
      console.log(sentence + ': Letters quantity is: ' + getSentenceLength(sentence));
    });
}

  countSentencesLetters('Привет, студент! Студент... Как дела, студент?');