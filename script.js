var cityName = document.querySelector("#city-name")
var temperature = document.querySelector("#temperature")
var humidity = document.querySelector("#humidity")
var windSpeed = document.querySelector('#wind-speed')
var citySearch = document.querySelector('.city-search')
var btnSearchCity = document.querySelector('.btn-primary')
var cityInput = document.querySelector("#city")

var tempCard1 = document.querySelector('#card-1-temperature')
var humidityCard1 = document.querySelector('#card-1-humidity')
var windSpeedCard1 = document.querySelector('#card-1-wind-speed')

var tempCard2 = document.querySelector('#card-2-temperature')
var humidityCard2 = document.querySelector('#card-2-humidity')
var windSpeedCard2 = document.querySelector('#card-2-wind-speed')

var tempCard3 = document.querySelector('#card-3-temperature')
var humidityCard3 = document.querySelector('#card-3-humidity')
var windSpeedCard3 = document.querySelector('#card-3-wind-speed')

var tempCard4 = document.querySelector('#card-4-temperature')
var humidityCard4 = document.querySelector('#card-4-humidity')
var windSpeedCard4 = document.querySelector('#card-4-wind-speed')

var tempCard5 = document.querySelector('#card-5-temperature')
var humidityCard5 = document.querySelector('#card-5-humidity')
var windSpeedCard5 = document.querySelector('#card-5-wind-speed')

var searchCity = function (event) {
    event.preventDefault();
    var city = citySearch.value.trim();
    if (city) {
      getCityWeather(city);
      console.log(city);
    } else {
      citySearch.placeholder = 'Error - no city name entered'
    }
  };

btnSearchCity.addEventListener('click', searchCity)

var getCityWeather = function(city) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=2b074948360ce79b3ed5889df63d9dd2')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)

            cityName.textContent = data.name
            temperature.textContent = "Temp: " + data.main.temp + " F"
            humidity.textContent = "Humidity: " + data.main.humidity + "%"
            windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH"
            forecast(data.coord.lat, data.coord.lon)
    })}

var forecast = function(lat, lon){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=%7Bpart%7D&units=imperial&appid=2b074948360ce79b3ed5889df63d9dd2')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            
            tempCard1.textContent = "Temp" + data.daily[0].temp.day + "F"
            humidityCard1.textContent = "Humidity" + data.daily[0].humidity + "%"
            windSpeedCard1.textContent = "Wind Speed" + data.daily[0].wind_speed + "MPH"

            tempCard2.textContent = "Temp" + data.daily[1].temp.day + "F"
            humidityCard2.textContent = "Humidity" + data.daily[1].humidity + "%"
            windSpeedCard2.textContent = "Wind Speed" + data.daily[1].wind_speed + "MPH"

            tempCard3.textContent = "Temp" + data.daily[2].temp.day + "F"
            humidityCard3.textContent = "Humidity" + data.daily[2].humidity + "%"
            windSpeedCard3.textContent = "Wind Speed" + data.daily[2].wind_speed + "MPH"

            tempCard4.textContent = "Temp" + data.daily[3].temp.day + "F"
            humidityCard4.textContent = "Humidity" + data.daily[3].humidity + "%"
            windSpeedCard4.textContent = "Wind Speed" + data.daily[3].wind_speed + "MPH"

            tempCard5.textContent = "Temp" + data.daily[4].temp.day + "F"
            humidityCard5.textContent = "Humidity" + data.daily[4].humidity + "%"
            windSpeedCard5.textContent = "Wind Speed" + data.daily[4].wind_speed + "MPH"
        })}

