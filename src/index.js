import creatCardsMenu from '../templates/card.hbs';
import menu from '../menu.json';

const paletteContainer = document.querySelector('.js-menu');
const cardsMenu = creatCardsMenu(menu);

paletteContainer.insertAdjacentHTML('afterbegin', cardsMenu);

const checkbox = document.querySelector('#theme-switch-toggle');
checkbox.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyHtml = document.querySelector('body');
function changeTheme(evt) {
  if (evt.target.checked) {
    bodyHtml.classList.toggle(Theme.DARK);
    bodyHtml.classList.toggle(Theme.LIGHT);

    localStorage.setItem('key', Theme.DARK);
  } else if (!evt.target.checked) {
    bodyHtml.classList.toggle(Theme.LIGHT);
    bodyHtml.classList.toggle(Theme.DARK);
    localStorage.setItem('key', Theme.LIGHT);
  }
}
saveTheme();
function saveTheme() {
  const saveKey = localStorage.getItem('key');
  if (!saveKey) {
    bodyHtml.classList.add(Theme.LIGHT);
    localStorage.setItem('key', bodyHtml.classList);
  } else {
    bodyHtml.classList.add(saveKey);
    if (saveKey === Theme.DARK) {
      checkbox.checked = true;
    }
  }
}
