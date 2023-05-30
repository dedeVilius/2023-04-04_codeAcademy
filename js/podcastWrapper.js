import { fetchData  } from './functions.js';
import { renderPodcastList } from './podcast.js';

async function podcastListCreator() {
  const asideElement = document.querySelector('aside');

  const podcastData = await fetchData('./js/data/podcast.json');

  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Podcastai ir radijo laidos';

  renderPodcastList(podcastData, asideElement);

  asideElement.prepend(mainTitle);
}

podcastListCreator();

export default podcastListCreator;