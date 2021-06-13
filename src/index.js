import card from '../templates/card.hbs';
import menu from '../menu.json';

const paletteContainer = document.querySelector('js-menu');
const cardsMenu = creatCardsMenu(menu);

paletteContainer.insertAdjacentHTML('beforeend', cardsMenu);

function creatCardsMenu(menu) {
  return menu.map(card).join('');
}
