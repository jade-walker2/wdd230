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

// WEATHER
// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const currentTemp2 = document.querySelector('#current-temp2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDesc2 = document.querySelector('#caption2');
const currentTemp3 = document.querySelector('#current-temp3');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc3 = document.querySelector('#caption3');

const lat = '33.1581';
const lon = '-117.3506';
const apikey = '2026f02d534a660d7948994426ff1778';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;


function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.list[0].main.temp.toFixed(0)}</strong>`;
  console.log(weatherData);

  //weather day 1
  const icon = `https://openweathermap.org/img/wn/${weatherData.list[0].weather[0].icon}@2x.png`
  const description = weatherData.list[0].weather[0].main;
  console.log(icon);
  weatherIcon.setAttribute('src', icon);
  weatherIcon.setAttribute('alt', description);
  captionDesc.textContent = description;
  document.querySelector("#humidity").innerHTML = weatherData.list[0].main.humidity + "%";
  let date1 = new Date(weatherData.list[0].dt_txt)
  console.log(new Date("10/05/23"))
  let dateWeather2 = new Date(`${date1.getMonth()+1}/${date1.getDate()+1}/${date1.getFullYear()}`)
  let dateWeather3 = new Date(`${dateWeather2.getMonth()+1}/${dateWeather2.getDate()+1}/${dateWeather2.getFullYear()}`)
  document.querySelector("#day1").textContent = date1.toLocaleString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"});
  document.querySelector("#day2").textContent = dateWeather2.toLocaleString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"});
  document.querySelector("#day3").textContent = dateWeather3.toLocaleString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"});
  let weatherDays = []
  let conditions = []
  
  for(let i =0; i < weatherData.list.length; i++) {
    
    let date2 = new Date(weatherData.list[i].dt_txt)
    if (date1.getDate() < date2.getDate() &&  date2.getHours()==0) {
      console.log(weatherData.list[i].dt_txt)
      weatherDays.push(weatherData.list[i].main.temp.toFixed(0))
      conditions.push(weatherData.list[i].weather[0].description)
    }
  }
  console.log(conditions)
  //weather day 2
  currentTemp2.innerHTML = `<strong>${weatherDays[0]}</strong>`;
  console.log(weatherData);

  const icon2 = `https://openweathermap.org/img/wn/${weatherData.list[1].weather[0].icon}@2x.png`
  const description2 = conditions[0];
  console.log(icon);
  weatherIcon2.setAttribute('src', icon2);
  weatherIcon2.setAttribute('alt', description2);
  captionDesc2.textContent = description2;
  document.querySelector("#humidity2").innerHTML = weatherData.list[1].main.humidity + "%";

  //weather day 3
  currentTemp3.innerHTML = `<strong>${weatherDays[1]}</strong>`;
  console.log(weatherData);

  const icon3 = `https://openweathermap.org/img/wn/${weatherData.list[2].weather[0].icon}@2x.png`
  const description3 = conditions[1];
  console.log(icon3);
  weatherIcon3.setAttribute('src', icon3);
  weatherIcon3.setAttribute('alt', description3);
  captionDesc3.textContent = description3;
  document.querySelector("#humidity3").innerHTML = weatherData.list[2].main.humidity + "%";

  console.log(weatherData);
  // let windSpeed = (document.querySelector("#windspeed").textContent=weatherData.list[0].wind.speed);
  //  // Set up the wind chill content
  //  let windChillMessage = "N/A";
  //  console.log(windSpeed, weatherData.main.temp.toFixed(0))
  //  if (windSpeed >= 3.0 && weatherData.main.temp.toFixed(0) <= 50) {
  //    let chill = Math.round(35.74 + 0.6215 * weatherData.main.temp.toFixed(0) - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * weatherData.main.temp.toFixed(0) * Math.pow(windSpeed, 0.16));
  //    windChillMessage = `${chill}`;
  //    console.log("windchill");
  //  }
  //  document.querySelector("#windchill").textContent=windChillMessage;
  // }
}
async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
    const data = await response.json();
   // this is for testing the call
    displayResults(data);
    } else {
    throw Error(await response.text());
    }
    } catch (error) {
    console.log(error);
    }
  }
    
apiFetch();


let drinkCount = localStorage.getItem("order-count")
if (drinkCount == null) {
  document.querySelector("#drinkCount").textContent = 0
} else {
  document.querySelector("#drinkCount").textContent = localStorage.getItem("order-count")
}

