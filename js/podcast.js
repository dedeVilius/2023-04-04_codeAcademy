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