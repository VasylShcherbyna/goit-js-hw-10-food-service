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
    bodyHtml.classList.toggle('dark-theme');
    bodyHtml.classList.toggle('light-theme');

    localStorage.setItem('key', Theme.DARK);
  } else if (!evt.target.checked) {
    bodyHtml.classList.toggle('light-theme');
    bodyHtml.classList.toggle('dark-theme');
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
    if (saveKey === 'dark-theme') {
      checkbox.checked = true;
    }
  }
}
