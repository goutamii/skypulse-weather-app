const saveSearchHistory = (city) => {
    let history =
        JSON.parse(localStorage.getItem("searchHistory")) || [];

    history = history.filter(
        (item) => item.toLowerCase() !== city.toLowerCase()
    );

    history.unshift(city);

    history = history.slice(0, 5);

    localStorage.setItem(
        "searchHistory",
        JSON.stringify(history)
    );

    displaySearchHistory();
};


const displaySearchHistory = () => {
    const historyList =
        document.getElementById("searchHistory");

    let history =
        JSON.parse(localStorage.getItem("searchHistory")) || [];

    historyList.innerHTML = "";

    history.forEach((city) => {
        const li = document.createElement("li");

        li.textContent = city;

        li.addEventListener("click", () => {
            getWeather(city);
        });

        historyList.appendChild(li);
    });
};

displaySearchHistory();