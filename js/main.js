var menuButton = document.querySelector('.nav-icon');

menuButton.addEventListener('click', function() {
  console.log('menu bars click!');
  document
    .querySelector('body')
    .classList
    .toggle('show-menu');
});