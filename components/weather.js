const getWeather = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);
        saveSearchHistory(city);
        getAQI(data.coord.lat, data.coord.lon);
        getForecast(city);

    } catch (error) {
        alert(error.message);
    }
};

const displayWeather = (data) => {
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.getElementById("humidity").textContent =
        `${data.main.humidity}%`;

    document.getElementById("wind").textContent =
        `${data.wind.speed} km/h`;

    document.getElementById("feelsLike").textContent =
        `${Math.round(data.main.feels_like)}°C`;

    document.getElementById("condition").textContent =
        data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl =
        `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.querySelector(".weather-icon").innerHTML =
        `<img src="${iconUrl}" alt="weather icon">`;

    
    updateBackground(data.weather[0].main);
};