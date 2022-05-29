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
    link1 = linksP1[0];
    link2 = linksP1[1];
 

button.addEventListener('click',changeStlyles,false);

function changeStlyles() {
    link1.className = 'changed';
    link2.className = 'changed';
           
}

var linksP2 = secondPar.children;
    link3 = linksP2[0];
    link4 = linksP2[1];

link3.onclick = function() { 
    var ahref1 = link3.href;
    alert(ahref1);
    return false;
}

link4.onclick = function() {
    var ahref2 = link4.href;
    alert(ahref2);
    return false;
}