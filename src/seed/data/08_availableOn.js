const dates = [];

const currDate = new Date();
const currYear = currDate.getFullYear();
const currMonth = currDate.getMonth();
let date = currDate.getDate()

const lastDayOfMonth = new Date(currYear, currMonth+1, 0).getDate();

while(date <= lastDayOfMonth){
    const obj = {
        date: `${currYear}-${currMonth+1}-${date < 10 ? ('0' + date) : date}`
    }
    dates.push(obj);
    date++;
}

export default {model: "AvailableOn", data: dates};