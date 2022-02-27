const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=dhaka,bd&limit=5&appid=6894a6943ffac86b0dcf7a9083863dbe';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => console.log(data));