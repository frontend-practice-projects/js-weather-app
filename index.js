
const apiKey = "c2218822b9a72aff0e4e26686dabc07e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// city: data.name, temp: data.main.temp, humidity: data.main.humidity, wind speed: data.wind.speed, icon: data.weather[0].main

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name ;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%" ;
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "./images/clouds.png";
                break;
            
            case "Clear":
                weatherIcon.src = "./images/clear.png"
                break;

            case "Rain":
                weatherIcon.src = "./images/rain.png"
                break;
            
            case "Drizzle":
                weatherIcon.src="./images/drizzle.png"
                break;
            
            case "Mist":
                weatherIcon.src="./images/mist.png"
                break;

            default :
                break;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        

    } catch (error) {
        
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "block";
        // console.log(error, data);
    }
    searchBox.value = "";
}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


// checkWeather();



