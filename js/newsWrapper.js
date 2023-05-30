import { fetchData, renderLargeButton } from './functions.js';
import { renderNewsList } from './news.js';

async function newsListCreator() {
  const mainElement = document.querySelector('main');

  const newsData = await fetchData('./js/data/news.json');

  const mainTitle = document.createElement('h1');
  mainTitle.textContent = 'Naujienos';

  const newestNewsWrapper = document.createElement('div');
  newestNewsWrapper.classList.add('news-wrapper', 'bg-v');

  const latestNewsWrapper = document.createElement('div');
  latestNewsWrapper.classList.add('news-wrapper','sm-v');

  const newestNews = newsData.slice(0, 2);
  const latestNews = newsData.slice(2);

  renderNewsList(newestNews, 'bg-v', newestNewsWrapper);
  renderNewsList(latestNews, 'sm-v', latestNewsWrapper);

  const largeButton = renderLargeButton('Visos naujienos');
  
  mainElement.prepend(mainTitle, newestNewsWrapper, latestNewsWrapper, largeButton);
}

newsListCreator();

export default newsListCreator;