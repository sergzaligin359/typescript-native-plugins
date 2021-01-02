import moment from 'moment';
import Header from '../Header';
import Body from '../Body';

moment.locale('ru');

const currentMoment: moment.Moment = moment();

const nextHandler = (e: Event, date: HTMLElement) => {
    console.log('click next');
    const momentjs = currentMoment.add(1, 'month');
    // generate(momentjs);
   // const date = document.querySelector('.calendar-header-date') as HTMLElement;
    date.innerHTML = momentjs.format('MMMM YYYY');
}

const prevHandler = (e: Event, date: HTMLElement) => {
    console.log('click prev');
    const momentjs = currentMoment.add(-1, 'month');
    // generate(momentjs);
    // const date = document.querySelector('.calendar-header-date') as HTMLElement;
    date.innerHTML = momentjs.format('MMMM YYYY');
}



const generate = (now: moment.Moment, tbody: HTMLElement) => {

    interface Day {
        value: moment.Moment,
        active: boolean,
        disabled: boolean,
        selected: boolean
    }
    interface Week {
        days: Day[]
    }

    console.log('now', now);
    tbody.innerHTML = '';
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');

    const calendar: Week[] = [];

    while(date.isBefore(endDay, 'day')){
        calendar.push({
            days: Array(7)
            .fill(0)
            .map(() => {
                const value = date.add(1, 'day').clone();
                const active = moment().isSame(value, 'date');
                const disabled = !now.isSame(value, 'month');
                const selected = now.isSame(value, 'date');
                return {
                    value,
                    active,
                    disabled,
                    selected
                }
            })
        })
        // calendar.push({
        //     days: Array(7)
        //     .fill(0)
        //     .map(() => {
        //         const value = date.add(1, 'day').clone();
        //         const active = moment().isSame(value, 'date');
        //         const disabled = !now.isSame(value, 'month');
        //         const selected = now.isSame(value, 'date');
        //         return {
        //             value,
        //             active,
        //             disabled,
        //             selected
        //         }
        //     })
        // })
    }

    console.log('calendar', calendar);
    // const div = document.createElement('div');
    // div.textContent = 'Hello world';
    for(const week of calendar){
        const tr = document.createElement('tr');
        for(const day of week.days){
            const td = document.createElement('td');
            td.textContent = day.value.format('D');
            day.disabled && td.classList.add('disabled');
            day.active && td.classList.add('active');
            tr.append(td);
        }
        tbody.append(tr);
    }
    
    // tbody.append(div);
}


export default (selector: string) => {

    if(selector){
        const calendar: HTMLElement = document.querySelector(`.${selector}`) as HTMLElement;
        const header: HTMLElement = Header(selector, currentMoment);
        const body: HTMLElement = Body(selector, currentMoment);

        calendar?.append(header);
        calendar?.append(body);

        const prevButton: HTMLElement = document.querySelector('.calendar-header-prev') as HTMLElement;
        const nextButton: HTMLElement = document.querySelector('.calendar-header-next') as HTMLElement;
        const date: HTMLElement = document.querySelector('.calendar-header-date') as HTMLElement;
        const tbody: HTMLElement = document.querySelector('.calendar-table tbody') as HTMLElement;

        prevButton?.addEventListener('click', (e) => prevHandler(e, date));
        nextButton?.addEventListener('click', (e) => nextHandler(e, date));

        generate(currentMoment, tbody);
        // console.log('prevButton, nextButton, date', prevButton, nextButton, date);

    }else{
        return null;
    }

};