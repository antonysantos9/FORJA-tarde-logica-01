function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    //console.log(numero1, numero2)
}

function sub(){
     var numero1 = document.getElementById("subn1").valueAsNumber
    var numero2 = document.getElementById("subn2").valueAsNumber
    var resposta = document.getElementById("respSub")

    resposta.textContent = numero1 - numero2
}