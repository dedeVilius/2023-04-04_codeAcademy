export function renderNewsList(dataType, classVersion, wrapperSelector) {
  dataType.forEach(item => {
    const { imageUrl, category, title, date } = item;

    const newsBoxWrapper = document.createElement('div');
    newsBoxWrapper.classList.add('news-box', classVersion);

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image');

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    const aboutWrapper = document.createElement('div');
    aboutWrapper.classList.add('about');

    const categoryElement = document.createElement('span');
    categoryElement.classList.add('category');
    categoryElement.textContent = category;

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const dateElement = document.createElement('span');
    dateElement.classList.add('date');
    dateElement.textContent = date;

    wrapperSelector.append(newsBoxWrapper);
    newsBoxWrapper.append(imageWrapper, aboutWrapper);
    imageWrapper.append(imageElement);
    aboutWrapper.append(categoryElement, titleElement, dateElement);
  });
}