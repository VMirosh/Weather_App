const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");
// time today
let time = document.querySelector(".time");
let today = new Date();
let formDate = options = { weekday: 'long', day: 'numeric' };
let now = today.toLocaleString('en-US', formDate);
time.append(now);
// pre loader



apiKey = "3647b1e8f8402085f210d7ac678222f2";


function weatherApp(cityWrite){
  
  let url = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityWrite +'&units=metric&appid='+apiKey;
fetch(url)
  .then(response => response.json())
  .then(response => {
    city.innerHTML = "Weather in " + response.name;
    country.innerHTML = response.sys.country;
    temp.innerHTML = Math.round(response.main.temp) + " <sup>°C/°F</sup>";
    humidity.innerText = "Humidity: " + response.main.humidity + " %";
    windSpeed.innerText = "Wind speed: " + response.wind.speed + " km/h";
    description.innerHTML = response.weather[0].description;
    icon.src = "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";

    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + response.name + "')";
    document.querySelector(".weather").classList.remove("loading");

    
    let flagTemp = true;
    temp.addEventListener("click", function () {
         if (flagTemp) {
        temp.innerHTML = ((9 / 5) * Math.round(response.main.temp) + 32) + "<sup>°F/°C</sup> ";
        flagTemp = false;
      } else {
        temp.innerHTML = Math.round(response.main.temp) + " <sup>°C/°F</sup>";
        flagTemp = true;
      }
    })

  });
}

weatherApp("Kiev");

let valueInput ;
let input = document.querySelector(".search-bar");
document.querySelector("button").addEventListener("click", function () {
   searchWeather();
  
  });

document.addEventListener("keyup", function (e) {
  debugger
      if (e.key == "Enter") {
       searchWeather();
        }
    });

function searchWeather(){
  valueInput = input.value;
  weatherApp(valueInput);
  input.value ="";
}
   




