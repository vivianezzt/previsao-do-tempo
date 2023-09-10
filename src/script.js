const key = "93bffe205dd4b6fc0aa51919620ea5f2"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
    
}

function cliqueiNoBotao(){
     const cidade = document.querySelector('.input-city').value 
     buscarCidade(cidade)
}