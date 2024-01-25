"strict mode"
const apiKey="980861a05182b208cce2a5c26c75fb42"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox= document.querySelector(".search input")
const searchButton= document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")


async function checkWeather(city){
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data= await response.json();

    //console just to check the data 
    console.log(data)

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/h";

    if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src="./images/snow.png";
    }
    else if(data.weather[0].main=="Smoke"){
        weatherIcon.src="./images/smoke.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src="./images/haze.png";
    }
    else if(data.weather[0].main=="Dust"){
        weatherIcon.src="./images/dust.png";
    }
    else if(data.weather[0].main=="Fog"){
        weatherIcon.src="./images/fog.png";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        weatherIcon.src="./images/thunderstorm.png";
    }
}

searchButton.addEventListener(
    'click',()=>{
        checkWeather(searchBox.value)
    }
)
