// weather.js
export async function loadWeather() {
    const placeName = document.getElementById("placeName");
    const icon = document.getElementById("icon-weather");
    const descPlace = document.getElementById("description-place");
    const temperature = document.getElementById("temp");

    const key = "26f433b808752ec3f4c6ac47bc879b0f";
    const latitude = 13.697812483700753; 
    const longitude = -89.19757185329638;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Weather API error");
        const data = await response.json();

        placeName.textContent = data.name;
        descPlace.textContent = data.weather[0].description;
        temperature.innerHTML = `${data.main.temp}&deg;C`;

        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.setAttribute("src", iconsrc);
        icon.setAttribute("alt", data.weather[0].description);
    } catch (err) {
        console.error("Weather error:", err);
    }
}
