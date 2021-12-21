const myCities = [
  'São Paulo',
  'Rio de Janeiro',
  'Manaus',
  'Belo Horizonte',
  'Cuiabá',
  'Entre Folhas',
  'Ouro Preto',
];

/* const fixName = (nameCity) => nameCity.replace(' ', '+'); */

myCities.forEach((item) => {
  const myOptions = document.getElementById('cities');
  const option = document.createElement('option');
  option.text = item;
  option.value = item;
  myOptions.appendChild(option);
});

const myForm = document.getElementById('form');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = document.getElementById('cities').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bebfe33c36ccb984d8f954f1568b83f`)
    .then((res) => res.json()
    .then((data) => {
      const { main: { temp } } = data;
      const body = document.getElementsByTagName('body')[0];
      const span = document.createElement('span');
      span.className = 'temperature';
      span.textContent = `Temperatura em ${city}: ${(temp - 273.15).toFixed(1)}°C`;
      const currentSpan = document.querySelectorAll('.temperature');
      if (currentSpan.length) currentSpan[0].remove();
      body.appendChild(span);
    })); 
});

