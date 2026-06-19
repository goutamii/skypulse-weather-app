const getAQI = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("AQI data not found");
        }

        const data = await response.json();

        displayAQI(data);

    } catch (error) {
        console.log(error.message);
    }
};

const displayAQI = (data) => {
    const aqiData = data.list[0];

    const aqi = aqiData.main.aqi;
    const pm25 = aqiData.components.pm2_5;
    const pm10 = aqiData.components.pm10;
    const co = aqiData.components.co;

    document.getElementById("aqiValue").textContent = aqi;
    document.getElementById("pm25").textContent = pm25;
    document.getElementById("pm10").textContent = pm10;
    document.getElementById("co").textContent = co;

    document.getElementById("aqiStatus").textContent =
        getAQIStatus(aqi);
};

const getAQIStatus = (aqi) => {
    switch (aqi) {
        case 1:
            return "Good";
        case 2:
            return "Fair";
        case 3:
            return "Moderate";
        case 4:
            return "Poor";
        case 5:
            return "Very Poor";
        default:
            return "Unknown";
    }
};