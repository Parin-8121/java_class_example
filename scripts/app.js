const weatherSet = new WeatherSet();

const weatherSelect = document.getElementById('weatherSelect');
const cityInput = document.getElementById('cityInput');
const addCityBtn = document.getElementById('addCityBtn');
const cityList = document.getElementById('cityList');

addCityBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  const condition = weatherSelect.value;

  if (city === '' || condition === '') {
    alert('Please select a weather type and enter a city name.');
    return;
  }

  const newWeather = new Weather(city, condition);
  weatherSet.addWeather(newWeather);

  displayCities();

  cityInput.value = '';
  weatherSelect.value = '';
});

function displayCities() {
  cityList.innerHTML = '';

  for (let i = 0; i < weatherSet.weatherCount(); i++) {
    const weather = weatherSet.getWeather(i);

    const cityDiv = document.createElement('div');
    cityDiv.classList.add('city-card', weather.getCondition());

    cityDiv.innerHTML = `
      <button class="remove-btn" data-index="${i}">&times;</button>
      <span class="city-name">${weather.getCity()}</span><br>
      <small>${weather.getCondition()}</small>
    `;

    cityList.appendChild(cityDiv);
  }

  // Add event listeners for remove buttons
  const removeButtons = document.querySelectorAll('.remove-btn');
  removeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      weatherSet.weatherReports.splice(index, 1);
      displayCities();
    });
  });
}
