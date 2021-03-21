const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "оентября", "октября", "ноября", "декабря"];
const dateObj = new Date();
	console.log('dateObj: ', dateObj);
const month = monthNames[dateObj.getMonth()];
const day = dateObj.getDate();
const year = dateObj.getFullYear();
const output =  day + '\n' + month +', ' + year;

document.querySelector('.todaydate').textContent = output; 

console.log('%c --> github.com/zyk0/coffee_shops', 'background: #222; color: #bada55');
