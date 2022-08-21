const input = document.querySelector('input');
const button = document.querySelector('button');
const cityName = document.querySelector('.city-name');
const warning = document.querySelector('.warning');
const photo = document.querySelector('.photo');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_KEY = '&appid=88490da41ecba81f0e7d205cc77404c0';
const API_UNITS = '&units=metric';

const main = () => {
	button.addEventListener('click', getWeather);
	input.addEventListener('keyup', (e) => {
		if (e.key === 'Enter') {
			getWeather();
		}
	});
};

const getWeather = () => {
	const city = input.value;
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then((res) => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);

			console.log(status);
			console.log(res);

            warning.textContent = ''
            input.value = ''

			cityName.textContent = res.data.name;
			temperature.textContent = Math.floor(temp) + '℃';
			humidity.textContent = Math.floor(hum) + '%';
			weather.textContent = status.main;
		})
		.catch(() => (warning.textContent = 'Wpisz poprawną nazwę miasta! '));
};

document.addEventListener('DOMContentLoaded', main);
