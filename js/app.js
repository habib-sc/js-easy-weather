const getLocation = () => {
    // Getting search input 
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    // Fetching location API 
    const locationApiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=5&appid=6894a6943ffac86b0dcf7a9083863dbe`;

    fetch(locationApiUrl)
        .then(response => response.json())
        .then(dataset => getWeather(dataset));
}

const getWeather = cities => {
    cities.forEach(city => {
        const weatherApiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=6894a6943ffac86b0dcf7a9083863dbe`;

        // Fetching weather 
        fetch(weatherApiUrl)
            .then(response => response.json())
            .then(dataset => displayWeather(dataset));
    })
}


const displayWeather = weather => {
    // Process and adding resutl 
    const weatherContainer = document.getElementById('weather-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="relative block p-8 overflow-hidden border border-gray-100 rounded-lg mt-5" href="">
        <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div class="justify-between items-center sm:flex">
            <div>
                <h3 class="text-3xl font-bold text-gray-900">
                    Dhaka
                </h3>
                <p class="mt-1 text-lg font-medium text-gray-600">Today | July 20</p>
            </div>

            <div class="flex-shrink-0 hidden ml-3 sm:block">
                <h5 class="text-2xl font-bold text-gray-900">
                    Sunny Weather
                </h5>
                <h5 class="text-2xl font-bold text-gray-900">
                    32º<span class="font-normal text-gray-700 mx-1">/</span>20º
                </h5>

            </div>

            <div class="flex-shrink-0 hidden ml-3 sm:block">
                <img class="object-cover w-16 h-16 rounded-lg shadow-sm" src="./images/sun.png" alt="Weather image" />

            </div>

        </div>
    </div>
    `;
    weatherContainer.appendChild(div);
}