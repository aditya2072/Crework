const api_key=`3de7a4f5b7e579cd6eba39de51a2ac60`;
const city=document.querySelector("#search_box").value;
const api_url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
const form=document.querySelector('form');

 const catchWeather=async(city)=>{
const response = await fetch(api_url);
const data=await response.json();
console.log(data);
return displayWeather(data);

};

// weather
const displayWeather=(data)=>{

    document.querySelector("#temperature").innerHTML=` <div><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width=100></div>
                                                  <span>${data.main.temp}°C </span`;
    document.querySelector("#pressure").innerHTML = data.main.pressure;
    document.querySelector("#humidity").innerHTML = data.main.humidity;
    document.querySelector("#feels-like").innerHTML = data.main.feels_like;
    document.querySelector("#wind").innerHTML=data.wind.speed;
    };



form.addEventListener('submit',(e)=>{
e.preventDefault();
catchWeather(city.value);
});

