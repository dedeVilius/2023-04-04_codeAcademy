export async function fetchData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
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