const drawPrevButton = (selector: string): HTMLElement => {
    const prevButton: HTMLElement = document.createElement('button');
    prevButton.className = `${selector}-header-prev`;
    prevButton.textContent = 'Предыдущий';
    return prevButton;
}

const drawNextButton = (selector: string): HTMLElement => {
    const nextButton: HTMLElement = document.createElement('button');
    nextButton.className = `${selector}-header-next`;
    nextButton.textContent = 'Следующий';
    return nextButton;
}

const drawDate = (selector: string, now: moment.Moment): HTMLElement => {
    const date: HTMLElement = document.createElement('span');
    date.className = `${selector}-header-date`;
    date.innerHTML = now.format('MMMM YYYY');
    return date;
}

const drawHeaderContainer = (selector: string): HTMLElement => {
    const container: HTMLElement = document.createElement('div');
    container.className = `${selector}-header`;
    return container;
}

const drawHTML = (selector: string, now: moment.Moment): HTMLElement => {
    const headerContainer: HTMLElement = drawHeaderContainer(selector);
    headerContainer.append(drawPrevButton(selector));
    headerContainer.append(drawDate(selector, now));
    headerContainer.append(drawNextButton(selector));
    return headerContainer;
}

export default (selector: string, currentMoment: moment.Moment): HTMLElement => {
    return drawHTML(selector, currentMoment);
}