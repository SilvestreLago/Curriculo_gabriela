
var filtro = document.querySelector('.filtro');

filtro.addEventListener("input", function(){
    var numeros = document.querySelectorAll(".numero");
    var ref = this;

    if (this.value.length > 0){

        numeros.forEach(function(numero){
            var tdResult = $(".resultado", numero)
            var resultado = tdResult.text()

            var expressao = new RegExp(ref.value, "i")

            var tdResult1 = $(".primeiro", numero)
            var resultado1 = tdResult1.text()

            var expressao = new RegExp(ref.value, "i")


            var tdResult2 = $(".segundo", numero)
            var resultado2 = tdResult2.text()

            var expressao = new RegExp(ref.value, "i")


            if (!expressao.test(resultado) && !expressao.test(resultado1) && !expressao.test(resultado2)) {
                numero.classList.add("invisivel");
            }else {
                numero.classList.remove("invisivel");
            }
        }); 
    }   else {
        numeros.forEach(function(numero){
            numero.classList.remove("invisivel");
        });
    }
    
});
