let city = document.querySelector(".city");
let cityWaether = document.querySelector(".weather-item");
let weatherClouds = document.querySelector(".clouds");
let description = document.querySelector(".description");

let url1 = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let url2 = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let url3 = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

fetch(url1)
.then(response => response.json())
.then(function(response){
  city.innerHTML = response.name;
  cityWaether.innerHTML = Math.round(response.main.temp -273) + '&#176' ;
  description.innerHTML = response.weather[0].description;
  weatherClouds.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png"/>`;
}) 

