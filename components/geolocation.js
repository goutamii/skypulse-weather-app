const getCurrentLocationWeather = () => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            fetchWeatherByCoords(lat, lon);
        },
        (error) => {
            alert("Unable to retrieve your location");
            console.log(error);
        }
    );
};

const fetchWeatherByCoords = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error("Location weather not found");
        }

        const data = await response.json();

        displayWeather(data);
        getAQI(lat, lon);
        getForecast(data.name);

    } catch (error) {
        console.log(error.message);
    }
};