const key ="f321d2c582c27d84f9b7554648e7ac6e"


function displayData(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description

    document.querySelector(".umidade").innerHTML = "Umidade: "+ dados.main.humidity + "%"

    document.querySelector(".img-previsao").src =(`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`)
}


async function SearchCity(City){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${key}&lang=pt_br&units=metric`).then(response=>response.json())
    console.log(dados)
    displayData(dados)
}


function ButtomClick(){
    const City = document.querySelector(".input-cidade").value
    SearchCity(City)

}