const updateBackground = (weatherCondition) => {
    let backgroundImage = "";

    switch (weatherCondition.toLowerCase()) {
        case "clear":
            backgroundImage =
                "url('assets/backgrounds/clear.png')";
            break;

        case "rain":
        case "drizzle":
            backgroundImage =
                "url('assets/backgrounds/rain.png')";
            break;

        case "clouds":
            backgroundImage =
                "url('assets/backgrounds/clouds.png')";
            break;

        case "snow":
            backgroundImage =
                "url('assets/backgrounds/snow.png')";
            break;

        case "thunderstorm":
            backgroundImage =
                "url('assets/backgrounds/storm.png')";
            break;

        case "mist":
        case "fog":
        case "haze":
        case "smoke":
            backgroundImage =
                "url('assets/backgrounds/mist.png')";
            break;

        default:
            backgroundImage =
                "url('assets/backgrounds/clear.png')";
    }

    document.body.style.backgroundImage = backgroundImage;
};