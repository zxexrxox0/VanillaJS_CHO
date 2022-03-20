const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "8620f52da8628aac6505631cdae96037";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `LOCATION : ${data.name}`;
      city.style.color = "#dee4ff"
      weather.innerText = `WEATHER : ${data.weather[0].main} \n TEMPERATURE : ${data.main.temp}`;
      weather.style.color = "#dee4ff"
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);