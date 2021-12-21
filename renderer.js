const key = '7bebfe33c36ccb984d8f954f1568b83f';

const myCities = [
  'São Paulo',
  'Rio de Janeiro',
  'Manaus',
  'Belo Horizonte',
  'Cuiabá',
];


myCities.forEach((item) => {
  const myOptions = document.getElementById('cities');
  const option = document.createElement('option');
  option.text = item;
  option.value = item;
  myOptions.appendChild(option);
});

const myForm = document.getElementById('form');

const generateCard = (data) => {
  const mainContainer = document.getElementsByClassName('wheatherInfo')[0];

  const cloud = document.getElementsByClassName('cloud')[0];
  const temp = document.getElementsByClassName('temp')[0];
  const windSpeed = document.getElementsByClassName('wind-speed')[0];
  const umidade = document.getElementsByClassName('umidade')[0];
  const pressure = document.getElementsByClassName('pressure')[0];
  const maxTemp = document.getElementsByClassName('max-temp')[0];
  const minTemp = document.getElementsByClassName('min-temp')[0];
  const thermalSensation = document.getElementsByClassName('thermal-sensation')[0];


  cloud.textContent = data.weather[0].main;
  temp.textContent = `${(data.main.temp - 273.15).toFixed(1)}°C`;
  windSpeed.textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;
  umidade.textContent = `${data.main.humidity}%`
  pressure.textContent = `${data.main.pressure}hPa`
  maxTemp.textContent = `${((data.main.temp_max) - 273.15).toFixed(1)}°C`;
  minTemp.textContent = `${((data.main.temp_min) - 273.15).toFixed(1)}°C`;
  thermalSensation.textContent = `${((data.main.feels_like) - 273.15).toFixed(1)}°C`;

  mainContainer.removeAttribute('hidden');
}

const fetchApi = () => {
  const city = document.getElementById('cities').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then((res) => res.json()
    .then((data) => generateCard(data, city))); 
};

window.onload = fetchApi();

const cities = document.getElementById('cities');

cities.addEventListener('change', () => fetchApi());

