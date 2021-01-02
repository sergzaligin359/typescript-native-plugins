import moment from 'moment';

export default (selector: string, currentMoment: moment.Moment) => {
    // console.log('Body component');
    const dayNames = ['Пн', 'Вн', 'Сн', 'Чн', 'Пт', 'Сб', 'Вс'];
    const table = document.createElement('table');
    table.className = `${selector}-table`;
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    for(const name of dayNames) {
        const th = document.createElement('th');
        th.textContent = name;
        tr.append(th);
    }
    thead.append(tr);
    const tbody = document.createElement('tbody');
    table.append(thead);
    table.append(tbody);

    return table;
}