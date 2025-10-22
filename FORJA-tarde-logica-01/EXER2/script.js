function idade(){

     var idade1 = parseFloat(document.getElementById("idd1").value)

     var resp = document.getElementById("resposta")

     if(idade1 >= 18){
   resp.textContent = "MAIOR DE IDADE"
  
 }else{
   resp.textContent = "MENOR DE IDADE"
  
 }
}