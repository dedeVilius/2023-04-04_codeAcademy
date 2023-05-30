import { fetchData, renderLargeButton } from './functions.js';
import { renderEventList } from './events.js';

async function eventListCreator() {
  const asideElement = document.querySelector('aside');

  const eventsData = await fetchData('./js/data/events.json');

  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Renginiai';

  const largeButton = renderLargeButton('Daugiau');

  asideElement.append(mainTitle);

  renderEventList(eventsData, asideElement);

  asideElement.append(largeButton);
}

eventListCreator();

export default eventListCreator;