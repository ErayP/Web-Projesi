const url = 'https://api.openweathermap.org/data/2.5/'
const key ='4284748ddb44bdd49237719664594e68'
const setQuery = (e) => {
    if (e.keyCode=='13')
    getResult(aramacubugu.value)
}
const getResult = (cityName) =>{
    let giden = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    console.log(giden);
    fetch(giden)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) =>{
    let city = document.querySelector('.city')
    city.innerText = `${result.name},${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C /
    ${Math.round(result.main.temp_max)}°C`
}

const aramacubugu= document.getElementById('aramacubugu')
aramacubugu.addEventListener('keypress',setQuery)