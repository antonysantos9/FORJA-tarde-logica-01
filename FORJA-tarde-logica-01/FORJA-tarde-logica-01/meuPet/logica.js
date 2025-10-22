function pet(){

     var nome = document.getElementById("nome").value
      var tipo = document.getElementById("tipo").value
       var idade = parseFloat (document.getElementById("idade").value)
        var raca = document.getElementById("raca").value
         var nac = document.getElementById("nac").value

         console.log(typeof nome, typeof tipo, typeof idade, typeof raça, typeof nac)

         var pnome = document.getElementById("pnome")
         var ptipo = document.getElementById("ptipo")
         var pidade = document.getElementById("pidade")
         var praca = document.getElementById("praca")
         var pnac = document.getElementById("pnac")

          pnome.textContent = nome
           ptipo.textContent = tipo
            pidade.textContent = idade
            praca.textContent = raca
            pnac.textContent = nac
}