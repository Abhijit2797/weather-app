let weather = {
    apikey: "87366cbf0bf4db1755100a36a8e288b5",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apikey
        )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data))
    },
    // to display weather
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)

        //display this info on the page

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h"


        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
    //search-bar
}
document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})

//addEventListener to input box when enter key is pressed

document.querySelector(".search-bar").addEventListener("keyup" , function(event){
    if(event.key == "Enter"){
        weather.search()
    }
})



