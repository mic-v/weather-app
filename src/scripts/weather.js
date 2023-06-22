
console.log("Welcome to Weather App!");

const api_key = import.meta.env.PUBLIC_API_KEY;
const api_url = import.meta.env.PUBLIC_API_URL;


async function getCurrentWeather(location) {
  const url = api_url + "/current.json?key=" + api_key + "&q=" + location + "&aqi=no";
  const response = await fetch(url, {mode:'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}

getCurrentWeather("London");