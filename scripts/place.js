const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `<span>${today.getFullYear()}</span>`;
const lastModified = document.getElementById("lastModified").innerHTML = document.lastModified;

var windSpeed = 9;
var temp = 47;
function calculateWindChill() {
    var feelTemp = 35.74 + 0.6215 * temp - 35.75 * (windSpeed ** 0.16) + 0.4275 * temp * (windSpeed ** 0.16)
    return feelTemp;
}

const windChill = document.querySelector("#windChill");
windChill.innerHTML = `<span>${Math.round(calculateWindChill())}°F</span>`;