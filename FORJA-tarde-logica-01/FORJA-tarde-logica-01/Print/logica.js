function atividade(){
    
    var nome = document.getElementById("nome").value
    var idade = parseFloat(document.getElementById("idade").value)

    console.log(typeof nome, typeof idade)

    var pnome = document.getElementById("printNome")
     var pidade = document.getElementById("printIdade")

     pnome.textContent = nome
     pnome.style.color = "Green"

     pidade.textContent = idade
     pidade.style.color = "Red"

}