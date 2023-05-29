export async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

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

export function renderPodcastList(dataType, wrapperSelector) {
  dataType.forEach(item => {
    const { imageUrl, duration, title, date } = item;

    const podcastBoxWrapper = document.createElement('div');
    podcastBoxWrapper.classList.add('podcast-box');

    const actionSectionWrapper = document.createElement('div');
    actionSectionWrapper.classList.add('action');

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image');

    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    const durationWrapper = document.createElement('div');
    durationWrapper.classList.add('duration');

    const durationElement = document.createElement('span');
    durationElement.classList.add('time');
    durationElement.textContent = `Trukmė: ${duration}`;

    const playButtonWrapper = document.createElement('div');
    playButtonWrapper.classList.add('play-button')

    const playButtonElement = document.createElement('i');
    playButtonElement.classList.add('fa-solid', 'fa-play');

    const aboutSectionWrapper = document.createElement('div');
    aboutSectionWrapper.classList.add('about');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const dateElement = document.createElement('span');
    dateElement.classList.add('date');
    dateElement.textContent = date;

    wrapperSelector.prepend(podcastBoxWrapper);
    podcastBoxWrapper.append(actionSectionWrapper, aboutSectionWrapper);
    actionSectionWrapper.append(imageWrapper, durationWrapper, playButtonWrapper)
    imageWrapper.append(imageElement);
    durationWrapper.append(durationElement);
    playButtonWrapper.append(playButtonElement);
    aboutSectionWrapper.append(titleElement, dateElement);
  });
}

export function renderEventList(dataType, wrapperSelector) {
  dataType.forEach(item => {
    const { imageUrl, title, format, date } = item;

    const eventsBoxWrapper = document.createElement('div');
    eventsBoxWrapper.classList.add('events-box');

    if (!imageUrl == '') {
      const imageSectionWrapper = document.createElement('div');
      imageSectionWrapper.classList.add('image');

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;

      eventsBoxWrapper.append(imageSectionWrapper);
      imageSectionWrapper.append(imageElement);
    }

    const aboutSectionWrapper = document.createElement('div');
    aboutSectionWrapper.classList.add('about');

    if (!format == '') {
      const typeElement = document.createElement('span');
      typeElement.classList.add('type');
      typeElement.textContent = format;

      aboutSectionWrapper.append(typeElement);
    }
    
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const stickerWrapper = document.createElement('div');
    stickerWrapper.classList.add('date-sticker');

    const stickerInnerWrapper = document.createElement('div');
    stickerInnerWrapper.classList.add('date-wrapper');

    date.forEach(item => {
      const { day, month } = item;

      const daySectionWrapper = document.createElement('div');
      daySectionWrapper.classList.add('day');

      const dayElement = document.createElement('span');
      dayElement.textContent = day;

      const monthSectionWrapper = document.createElement('div');
      monthSectionWrapper.classList.add('month');

      const monthElement = document.createElement('span');
      monthElement.textContent = month;

      stickerInnerWrapper.append(daySectionWrapper, monthSectionWrapper);
      daySectionWrapper.append(dayElement),
        monthSectionWrapper.append(monthElement)
    })
    
    wrapperSelector.append(eventsBoxWrapper);
    eventsBoxWrapper.append(aboutSectionWrapper);
    aboutSectionWrapper.append(stickerWrapper, titleElement);
    stickerWrapper.append(stickerInnerWrapper);
  });
}

export function renderLargeButton(buttonText) {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('big-button');

  const buttonTitle = document.createElement('h2');
  buttonTitle.textContent = buttonText;

  const buttonArrow = document.createElement('i');
  buttonArrow.classList.add('fa-solid', 'fa-chevron-right');

  buttonWrapper.append(buttonTitle, buttonArrow);

  return buttonWrapper;
}