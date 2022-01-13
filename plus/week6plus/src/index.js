//update city
//update weather
let apiKey = "ff0fe0ffb9358980f404ff0571afd9d3";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
let elementCity = document.querySelector(".city");
let elementTempt = document.querySelector(".tempt");
let elementTime = document.querySelector(".time");
let elementHumid = document.querySelector(".humid");
let elementInput = document.querySelector("#search-input");
let searchForm = document.querySelector("#search-form");

let apiUrlCity = "https://api.openweathermap.org/data/2.5/weather?q=";
//{city name}&appid={API key}

searchForm.addEventListener("submit", setSearchCity);

function handlePosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let link = `${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(link);
  axios.get(link).then(temperture);
  axios.get(link).then(city);
  axios.get(link).then(humidity);
}
function temperture(tempt) {
  elementTempt.innerHTML = `${tempt.data.main.temp}°`;
}
function city(city) {
  elementCity.innerHTML = `${city.data.name}`;
}
function humidity(humid) {
  elementHumid.innerHTML = `Humidity ${humid.data.main.humidity}`;
}

navigator.geolocation.getCurrentPosition(handlePosition);
function time() {
  let date = new Date();
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  let hour = date.getHours();
  let min = date.getMinutes();
  elementTime.innerHTML = `${days[day]} ${hour}:${min}`;
}
time();

function setSearchCity(e) {
  e.preventDefault();
  let cityRow = elementInput.value;
  let city = cityRow.charAt(0).toUpperCase() + cityRow.slice(1);
  elementCity.innerHTML = city;
  let linkCity = `${apiUrlCity}${city}&appid=${apiKey}&units=metric`;
  console.log(linkCity);

  axios.get(linkCity).then(temperture);
  axios.get(linkCity).then(city);
  axios.get(linkCity).then(humidity);
}
