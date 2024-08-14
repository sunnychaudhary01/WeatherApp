const inputBox = document.getElementById('inputBox')
const city = document.getElementById('city')
const head = document.getElementById('head1')
const Type = document.getElementById('head2')
const search = document.querySelector('.search');
const image = document.querySelector('.image')
let Search;

async function weather(Search) {
    const API_key = "01b6d8fae19acf5a476e47eefc596630";
    const prom = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Search}&appid=${API_key}&units=metric`)
    const res = await prom.json();
    console.log(res);
    
    let cityName = city.innerHTML = res.name;
    console.log(cityName);
    let cityTemp = head.textContent = Math.floor(Math.round( res.main.temp)) + "°C";
    Type.textContent = res.weather[0].main;
    if (Type.innerHTML === 'Clouds') {
        image.src = 'clouds.png';
    }

}
search.addEventListener('click',()=> {
    Search = inputBox.value;
    weather(Search)
    inputBox.value = ""
})
