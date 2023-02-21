let city = document.querySelector(".city");
let country = document.querySelector(".country");
let temp = document.querySelector(".temp");
let icon = document.querySelector(".icon");
let description = document.querySelector(".description");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");


let url = 'https://api.openweathermap.org/data/2.5/weather?q=Lviv&units=metric&appid=bf35cac91880cb98375230fb443a116f';


fetch(url)
  .then(response => response.json())
  .then(function (response) {
    city.innerHTML = "Weather in " + response.name;
    country.innerHTML = response.sys.country;
    temp.innerText = Math.round(response.main.temp) + " °C/°F";
    humidity.innerText = "Humidity: " + response.main.humidity + " %";
    windSpeed.innerText = "Wind speed: " + response.wind.speed + " km/h";
    description.innerHTML = response.weather[0].description;
    icon.src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";

    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + response.name + "')";
    let flagTemp = true;
    temp.addEventListener("click", function () {
   
      if (flagTemp) {
        temp.innerHTML = ((9 / 5) * Math.round(response.main.temp) + 32) + " °F/°C";
        flagTemp = false;
      } else {
        temp.innerText = Math.round(response.main.temp) + "°C/°F";
        flagTemp = true;
      }
    })
  });
// time today
let time = document.querySelector(".time");
let today = new Date();
let formDate = options = { weekday: 'long', day: 'numeric' };
let now = today.toLocaleString('en-US', formDate);
time.append(now);

   




