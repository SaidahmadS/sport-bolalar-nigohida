var modalWindow = document.querySelector('#modal-window');
var overly = document.querySelector('#overly');
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var body = document.querySelector('.body');

button.addEventListener('click', function(){
  overly.classList.add('visible');
  modalWindow.classList.add('open');
  modal.classList.add('modal-open');
  body.classList.add('opened');
});

overly.addEventListener('click', function(){
  overly.classList.remove('visible');
  modalWindow.classList.remove('open');
  modal.classList.remove('modal-open');
  body.classList.remove('opened');
});