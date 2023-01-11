// appel de l'API openweather avec le nom de la ville en parametre
//window.fetch('https://api.openweathermap.org/data/2.5/weather?q=paris&appid=')
let callBack = function(city){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a746d1935c409bf731d4edfed863b989`;

fetch(url)
    .then((response) =>
    response.json().then((data) => {
        console.log(data);
        document.querySelector('#city').innerHTML = data.name;
        document.querySelector('#temp').innerHTML = 
        "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°C';
        document.querySelector('#humidity').innerHTML = 
        "<i class='fas fa-tint'></i>" + data.main.humidity + '%' ;
        document.querySelector('#wind').innerHTML = 
        "<i class = 'fas fa-wind'></i>" + data.wind.speed + 'km/h';
    })
).catch(error => console.log(' erreur ' + error));
}

// ecouteur d'evenement

document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        let ville = document.querySelector('#inputCity').value;

        callBack(ville);
    }
);

callBack('paris');

