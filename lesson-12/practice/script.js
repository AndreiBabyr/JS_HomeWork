var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var buttons = document.getElementsByTagName('button');
    button = buttons[0];

    var linksP1 = firstPar.children;
    
 button.addEventListener('click',changeStlyles,false);

function changeStlyles() { 
    for( var i = 0; i < linksP1.length; i++) {
        var links = linksP1[i];
        links.className = 'changed';
    }
};

secondPar.onclick = function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      alert(event.target.href);
    }
};