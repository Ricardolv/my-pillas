var alternator = document.querySelector('.js-button-switch');

alternator.onclick = function() {
  var menu = document.querySelector('.js-menu');
  menu.classList.toggle('menu--show');
}