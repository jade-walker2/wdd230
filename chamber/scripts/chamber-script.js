var date = document.lastModified;
document.getElementById("result").innerHTML = "The document was last modified on : " + date;

const d = new Date();
let year = d.getFullYear();
document.getElementById("date").innerHTML = year;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
	document.querySelector(".menu").classList.toggle("active");
  }
  document.querySelector(".icon").addEventListener("click",myFunction);

  if (now.getDay()===1 || now.getDay()===2){
      document.querySelector("#notification").style.display="block"
  }

// WEATHER
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const lat = '43.4927';
const lon = '-112.0408';
const apikey = '2026f02d534a660d7948994426ff1778';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;


function displayResults(weatherData) {
currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

const icon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
const description = weatherData.weather[0].main;

weatherIcon.setAttribute('src', icon);
weatherIcon.setAttribute('alt', description);
captionDesc.textContent = description
console.log(weatherData);
let windSpeed = (document.querySelector("#windspeed").textContent=weatherData.wind.speed);
 // Set up the wind chill content
 let windChillMessage = "N/A";
 console.log(windSpeed, weatherData.main.temp.toFixed(0))
 if (windSpeed >= 3.0 && weatherData.main.temp.toFixed(0) <= 50) {
   let chill = Math.round(35.74 + 0.6215 * weatherData.main.temp.toFixed(0) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * weatherData.main.temp.toFixed(0) * Math.pow(windSpeed, 0.16));
   windChillMessage = `${chill}`;
   console.log("windchill");
 }
 document.querySelector("#windchill").textContent=windChillMessage;
}

async function apiFetch() {
try {
const response = await fetch(url);
if (response.ok) {
const data = await response.json();
console.log(data); // this is for testing the call
displayResults(data);
} else {
throw Error(await response.text());
}
} catch (error) {
console.log(error);
}
}

apiFetch();

