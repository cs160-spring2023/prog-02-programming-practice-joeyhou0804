let key = "fdcb999abb5a96b6e30ff9ca1c435428";

$(document).ready(function(){
    let d = new Date();
    $("#time").text(d.toLocaleString());

    $.getJSON(`https://api.openweathermap.org/data/2.5/forecast?q=Berkeley&units=imperial&appid=${key}`, function(data) {
        for (let i = 0; i < 8; i++) {
            let text = "<p>" + "Time: " + data.list[i].dt_txt + ", Weather: " + data.list[i].weather[0].main + ", Temp: " + data.list[i].main.temp + ", Wind Speed: " + data.list[i].wind.speed + "</p>";
            $("#weatherData").append(text);
        }
    });
});