import { renderLargeButton } from './functions.js';

function clipCreator() {
  const mainElement = document.querySelector('main');

  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Vaizdo įrašai';

  const clipElement = document.createElement('iframe');
  clipElement.src = 'https://www.youtube.com/embed/b8dGCsP75HA?&autoplay=0';
  clipElement.width = '100%';
  clipElement.height = '500px';

  const secondTitle = document.createElement('h2');
  secondTitle.classList.add('main');
  secondTitle.textContent = 'Jei galiu aš – gali ir tu!';

  const largeButton = renderLargeButton('Visi vaizdo įrašai');
  
  mainElement.append(mainTitle, clipElement, secondTitle, largeButton);
}

clipCreator();

export default clipCreator;