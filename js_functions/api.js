document.addEventListener('DOMContentLoaded', () => {
    displayDateTime();
    fetchWeather();

    setInterval(displayDateTime, 1000); 
});

function displayDateTime() {
    const now = new Date();
    const dateTimeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
    document.getElementById('date-time').textContent = dateTimeStr;
}

async function fetchWeather() {
    const apiKey = 'efb16b4ff35ee538f99ba1122d407979'; 
    const city = 'Johannesburg'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Fetching weather data failed:', error);
    }
}

function displayWeather(data) {
    const weatherElement = document.getElementById('weather');
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    weatherElement.textContent = `Weather in ${data.name}: ${temperature}°C, ${description}`;
}