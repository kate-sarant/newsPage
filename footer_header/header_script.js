
let weather = {
  apiKey:"45d578be6b42425baf50dd4d11bef893",
  fetchWeather:function(city){
    fetch(
        "http://api.openweathermap.org/data/2.5/weather?q="
        + city
        +"&units=metric&appid="
        + this.apiKey
    ).then((response) => response.json()).then((data) => this.displayWeather(data));

  },
  //display api -data
  displayWeather: function(data){
    const { name } = data;
    const { icon, description} = data.weather[0];
    const { temp ,humidity,temp_max,temp_min,feels_like} = data.main;
    const {speed} = data.wind;


    console.log(name, icon, description, temp ,humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="http://openweathermap.org/img/wn/"+ icon +"@2x.png";
    document.querySelector(".temp").innerText= Math.round(temp) + "℃" ;
    document.querySelector(".weather").classList.remove("loading");

  },
};

weather.fetchWeather("Athens");
