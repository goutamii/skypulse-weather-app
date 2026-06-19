const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const locationBtn =
    document.getElementById("locationBtn");

// Search button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city !== "") {
        getWeather(city);
    }
});

// Enter key search
cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();

        if (city !== "") {
            getWeather(city);
        }
    }
});

// Current location weather
locationBtn.addEventListener("click", () => {
    getCurrentLocationWeather();
});