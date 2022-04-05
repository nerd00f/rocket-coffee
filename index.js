const buttonToggle = document.querySelector('#button--mobile')
const navbar = document.querySelector('#navbar')
let state = 0;

function menuMobile() {
 if (state == 0) {
  buttonToggle.classList.remove('collapse')
  buttonToggle.classList.add('collapsed')
  navbar.classList.toggle('nav--collapsed')
  state++;
 } else {
  buttonToggle.classList.add('collapse')
  buttonToggle.classList.remove('collapsed')
  navbar.classList.toggle('nav--collapsed')
  state--;
 }
}

buttonToggle.addEventListener('click', menuMobile)
