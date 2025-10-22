function soma(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var resposta = document.getElementById("respSoma")

    resposta.textContent = numero1 + numero2
    //console.log(numero1, numero2)
}

function sub(){
     var num1 = parseFloat(document.getElementById("subn1").value)
    var num2 = parseFloat(document.getElementById("subn2").value)
    var resposta = document.getElementById("respSub")

    resposta.textContent = num1 - num2
}

function mult(){
     var number1 = parseFloat(document.getElementById("mult1").value)
    var number2 = parseFloat(document.getElementById("mult2").value)
    var resposta = document.getElementById("respMult")

    resposta.textContent = number1 * number2
}

function div(){
     var numb1 = parseFloat(document.getElementById("div1").value)
    var numb2 = parseFloat(document.getElementById("div2").value)
    var resposta = document.getElementById("respDiv")

    resposta.textContent = numb1 / numb2
}