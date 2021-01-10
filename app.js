let URL = "https://api.openweathermap.org/data/2.5/weather?q=anor&units=metric&lang=fr&appid=f5c382e18131ee20c243227653a7d50c";// API pour Anor, metric = celcius, temps actuelles

let xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.responseType = "json";

function imageTemps(i, id){
    let response = xhr2.response;
    if (response.daily[i].weather[0].main === "Cloudy"){ //soleil avec nuage
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun-behind-cloud_26c5.png";
    }
    else if(response.daily[i].weather[0].main === "Clouds"){ //nuages
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    else if (response.daily[i].weather[0].main === "Fog" || response.daily[i].weather[0].main === "Haze" || response.daily[i].weather[0].main === "Mist") { //brouillard et brume
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    else if(response.daily[i].weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    else if (response.daily[i].weather[0].main === "Clear"){ //soleil
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    else if (response.daily[i].weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    else if (response.daily[i].weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById(id).src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }
}

function jours(idDate,idTempsMax,idTempsMin,jours,i) {
    let response = xhr2.response;
    let aujourdhui = new Date();
    document.getElementById(idDate).innerHTML =  (aujourdhui.getDate() + jours ) + "/" + aujourdhui.getMonth() + 1 + "/" + aujourdhui.getFullYear();
    document.getElementById(idTempsMax).innerHTML += Math.round(response.daily[i].temp.max) + "°";
    document.getElementById(idTempsMin).innerHTML += Math.round(response.daily[i].temp.min) + "°";
}

xhr.onload = function () {
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
    else if(response.weather[0].main === "Clouds"){ //nuages
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud_2601-fe0f.png";
    }
    else if (response.weather[0].main === "Fog" || response.weather[0].main === "Haze" || response.weather[0].main === "Mist") { //brouillard et brume
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/fog_1f32b-fe0f.png";
    }
    else if(response.weather[0].main === "Rain"){ //nuage avec pluie
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-rain_1f327-fe0f.png";
    }
    else if (response.weather[0].main === "Clear"){ //soleil
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/sun_2600-fe0f.png";
    }
    else if (response.weather[0].description === "Snowy"){ //nuage avec neige
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-snow_1f328-fe0f.png";
    }
    else if (response.weather[0].description === "Stormy"){ //nuage avec éclair
        document.getElementById("imageTemps").src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/cloud-with-lightning_1f329-fe0f.png";
    }
}
xhr.send();

let URL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=49.99&lon=4.1005&lang=fr&units=metric&exclude=minutely,hourly,alerts&appid=f5c382e18131ee20c243227653a7d50c";// API pour Anor, metric = celcius, prévisions 4j

let xhr2 = new XMLHttpRequest();
xhr2.open("GET", URL2);
xhr2.responseType = "json";

xhr2.onload = function () {
    //jour 1 --> demain
    jours("date1", "tempsMax1", "tempsMin1", 1,0);
    imageTemps(0, "imageTemps1");

    //Jour 2
    jours("date2","tempsMax2", "tempsMin2", 2, 1);
    imageTemps(1, "imageTemps2");

    //Jour 3
    jours("date3", "tempsMax3", "tempsMin3", 3, 2);
    imageTemps(2, "imageTemps3");

    //Jour 4
    jours("date4", "tempsMax4", "tempsMin4", 4,3)
    imageTemps(3, "imageTemps4");
}

xhr2.send();
console.log(xhr2);