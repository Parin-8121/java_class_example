class WeatherSet {
  constructor() {
    this.weatherReports = [];
  }

  addWeather(weather) {
    this.weatherReports.push(weather);
  }

  getWeather(index) {
    return this.weatherReports[index];
  }

  weatherCount() {
    return this.weatherReports.length;
  }
}
