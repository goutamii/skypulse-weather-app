const getForecast = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Forecast data not found");
        }

        const data = await response.json();

        displayForecast(data.list);

    } catch (error) {
        console.log(error.message);
    }
};

const displayForecast = (forecastList) => {
    const forecastContainer =
        document.querySelector(".forecast-container");

    forecastContainer.innerHTML = "";

    for (let i = 0; i < forecastList.length; i += 8) {
        const forecast = forecastList[i];

        const date = new Date(forecast.dt_txt);
        const day = date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const temp = Math.round(forecast.main.temp);

        const condition =
            forecast.weather[0].description;

        const icon =
            forecast.weather[0].icon;

        const iconUrl =
            `https://openweathermap.org/img/wn/${icon}@2x.png`;

        const forecastCard = `
            <div class="forecast-card glass">
                <p>${day}</p>
                <img src="${iconUrl}" alt="${condition}">
                <h4>${temp}°C</h4>
                <span>${condition}</span>
            </div>
        `;

        forecastContainer.innerHTML += forecastCard;
    }
};