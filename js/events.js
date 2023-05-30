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