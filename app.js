const URL = "https://api.openweathermap.org/data/2.5/weather?q=anor&units=metric&lang=fr&appid=f5c382e18131ee20c243227653a7d50c";// API pour Anor, metric = celcius
console.log(URL);

let xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        alert("Une erreur est survenue");
        return;
    }

    let response = xhr.response;
    document.getElementById("state").innerHTML = response.name;
    document.getElementById("date").innerHTML = new Date().toLocaleDateString();
    document.getElementById("typeTemps").innerHTML = response.weather[0].description;
    document.getElementById("temperature").innerHTML = Math.round(response.main.temp) + "°";
    document.getElementById("tempsMax").innerHTML += Math.round(response.main.temp_max) + "°";
    document.getElementById("tempsMin").innerHTML += Math.round(response.main.temp_min) + "°";
    document.getElementById("humidity").innerHTML += response.main.humidity + " %";
    document.getElementById("windSpeed").innerHTML += response.wind.speed + " m/s";

}

xhr.send();
console.log(xhr);

