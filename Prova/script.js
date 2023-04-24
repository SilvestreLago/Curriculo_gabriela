function Calcular(){
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var text = document.getElementById('IMC')
    var IMC = peso / altura**2
    var error = document.getElementById('error')
    var inp1 = document.getElementById('peso')
    var inp2 = document.getElementById('altura')
    if (peso == "" | altura == ""){
        error.innerText = "Os campos não podem estar vazio."
        error.style.display = "block"
        inp1.style.border = '2px solid red'
        inp2.style.border = '2px solid red'
    }

    else if(IMC < 18.5){
        text.innerText ="Seu IMC: " + IMC + " Categoria: Magreza"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else if (IMC > 18.5 & IMC < 24.9){
        text.innerText = "Seu IMC: " + IMC + " Categoria: Normal"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else if (IMC > 25 & IMC < 29.9){
        text.innerText ="Seu IMC: " + IMC + " Categoria: Sobrepeso"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else if (IMC > 30 & IMC < 34.4){
        text.innerText ="Seu IMC: " + IMC + " Categoria: Obesidade grau I"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else if (IMC > 35 & IMC < 39.9){
        text.innerText ="Seu IMC: " + IMC + " Categoria: Obesidade grau II"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else if (IMC > 40){
        text.innerText ="Seu IMC: " + IMC + " Categoria: Obesidade grau III"
        text.style.display = "block";
        error.style.display = "none"
        inp1.style.border = '2px solid green'
        inp2.style.border = '2px solid green'
    }

    else{
        error.innerText = "Erro inesperado"
        error.style.display = "block"
        inp1.style.border = '2px solid red'
        inp2.style.border = '2px solid red'
    }
}