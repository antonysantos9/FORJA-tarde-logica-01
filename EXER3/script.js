function media(){

     var nota1 = parseFloat(document.getElementById("media1").value)
   var nota2 = parseFloat(document.getElementById("media2").value)
   var nota3 = parseFloat(document.getElementById("media3").value)

     var media = document.getElementById("resposta")
  var conta = (nota1 + nota2 + nota3) /3

  if(conta >= 7){
   media.textContent = conta.toFixed(2) + " - " + "APROVADO"
   
 }else{
   media.textContent = conta.toFixed(2) + " - " + "REPROVADO"
   
 }
}