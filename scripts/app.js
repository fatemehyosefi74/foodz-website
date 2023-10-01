//Selectors
const hamburgerIconBtn = document.querySelector('.hamburger-icon');
const navEl = document.querySelector('.nav-column-mobile');
const hamburgerIconLine = document.querySelector('.hamburger-icon__line');
let isActive = false;
hamburgerIconBtn.addEventListener('click', function() {
  if (isActive) {
    navEl.classList.remove('nav-column-mobile--active');
    hamburgerIconLine.classList.remove('hamburger-icon__line--active');
    isActive = false;
  } else {
    navEl.classList.add('nav-column-mobile--active');
    hamburgerIconLine.classList.add('hamburger-icon__line--active');
    isActive = true;
  }
});
