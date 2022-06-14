var content = document.getElementById('content');
var tabsContainer = document.getElementById('tabs-container');
var tabContent = document.getElementById('current-tab-content');
var btnGetContent = document.getElementById('btn-get-content');

var users;

function dataReceivedSuccessfully() {
  tabsContainer.className = 'tabs-container';
  tabContent.className = 'tab-content';
  renderTabs();
  renderTabContent();
}

function getData() {
  if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
    return dataReceivedSuccessfully();
  }
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
  xhr.send();
  xhr.onload = function () {
    users = JSON.parse(xhr.response).data;
    localStorage.setItem('users', JSON.stringify(users));
    dataReceivedSuccessfully();
  };
  xhr.onerror = function () {
    if (document.querySelector('.error-message')) return;
    var error = document.createElement('h1');
    error.className = 'error-message';
    error.innerText = 'Error! Cannot get data.';
    content.append(error);
  };
}

function renderTab(tabIndex, active) {
  var tab = document.createElement('div');
  tab.className = active ? 'tab active' : 'tab';
  tab.innerText = 'User ' + (+tabIndex + 1);
  tab.id = tabIndex;
  return tab;
}

function renderTabs() {
  tabsContainer.innerHTML = null;
  users.forEach((u, i) => {
    tabsContainer.append(renderTab(i, i === 0));
  });
}

function renderTabContent(userId) {
  tabContent.innerHTML = null;
  var userImage = document.createElement('img');
  userImage.src = users[userId || 0].avatar;
  userImage.width = 128;
  userImage.height = 128;
  var userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  userInfo.innerText =
    'First Name: ' + users[userId || 0].first_name + '\n' + 'Last Name: ' + users[userId || 0].last_name;
  tabContent.append(userImage);
  tabContent.append(userInfo);
}

tabsContainer.onclick = function (event) {
  if (event.target.className === 'tab') {
    for (var tab of tabsContainer.children) {
      if (tab.id === event.target.id) tab.className = 'tab active';
      else tab.className = 'tab';
    }
    renderTabContent(event.target.id);
  }
};

btnGetContent.onclick = function () {
  getData();
};
