let URL = "https://api.openweathermap.org/data/2.5/weather?q=anor&units=metric&lang=fr&appid=f5c382e18131ee20c243227653a7d50c";// API pour Anor, metric = celcius, temps actuelles

let xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.responseType = "json";

xhr.onload = function () {
    if (xhr.status !== 200) {
        alert("Une erreur est survenue");
        return;
    }
    let response = xhr.response;
        document.getElementById("state").innerHTML = response.name + ", " + response.sys.country;
        document.getElementById("date").innerHTML = new Date().toLocaleDateString();
        document.getElementById("typeTemps").innerHTML = response.weather[0].description;
        document.getElementById("temperature").innerHTML = Math.round(response.main.temp) + "°";
        document.getElementById("tempsMax").innerHTML += Math.round(response.main.temp_max) + "°";
        document.getElementById("tempsMin").innerHTML += Math.round(response.main.temp_min) + "°";
        document.getElementById("humidity").innerHTML += response.main.humidity + " %";
        document.getElementById("windSpeed").innerHTML += response.wind.speed + " m/s";

        if (response.weather[0].main === "Cloudy"){ //soleil avec nuage
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
        }
        if(response.weather[0].main === "Clouds"){ //nuages
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
        }
        if (response.weather[0].main === "Fog" || response.weather[0].main === "Haze" || response.weather[0].main === "Mist") { //brouillard et brume
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
        }
        if(response.weather[0].main === "Rain"){ //nuage avec pluie
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
        }
        if (response.weather[0].main === "Clear"){ //soleil
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
        }
        if (response.weather[0].description === "Snowy"){ //nuage avec neige
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
        }
        if (response.weather[0].description === "Stormy"){ //nuage avec éclair
            document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
        }
}

xhr.send();
console.log(xhr);
