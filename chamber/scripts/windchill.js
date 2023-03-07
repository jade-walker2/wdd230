// Wind chill stuff
function setWindChill(windSpeed, temperature) {
    // Get the DOM objects that are dynamic
    let temperatureSpan = document.querySelector("#temperature");
    let windSpeedSpan = document.querySelector("#windspeed");
    let windChillSpan = document.querySelector("#windchill");
  
    // Set up the wind chill content
    let windChillMessage = "N/A";
    if (windSpeed >= 3.0 && temperature <= 50) {
      let chill = Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
      windChillMessage = `${chill}`;
    }
  
    // Write out the dynamic content
    temperatureSpan.textContent = temperature;
    windSpeedSpan.textContent = windSpeed + " mph";
    windChillSpan.innerHTML = windChillMessage + " &deg; F";
  }
  
  setWindChill(5, 25);