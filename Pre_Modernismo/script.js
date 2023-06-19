function iniciar(){
    var n1 = document.getElementById("ex")
    var n2 = document.getElementById("tx")

    n1.style.display = 'block'
    n2.style.display = 'none'
}

function voltar(){
    var n3 = document.getElementById("ex")
    var n4 = document.getElementById("tx")

    n3.style.display = 'none'
    n4.style.display = 'block'
}

function resposta(){
    var c0 = 0
    var c1 = document.getElementsByName("01")
    var c2 = document.getElementsByName("02")
    var c3 = document.getElementsByName("03")
    var c4 = document.getElementsByName("04")
    var c5 = document.getElementsByName("05")
    var re = document.getElementById('resp')
    var n3 = document.getElementById("ex")
    var n4 = document.getElementById("tx")

    if (c1[1].checked){
        c0++
        console.log(c0)
    }
    if (c2[1].checked){
        c0++
        console.log(c0)
    }
    if (c3[1].checked){
        c0++
        console.log(c0)
    }
    if (c4[1].checked){
        c0++
        console.log(c0)
    }
    if (c5[1].checked){
        c0++
        console.log(c0)
    }

    if (c0 >= 3){
        re.style.backgroundColor = "green"
    }
    if (c0 < 3){
        re.style.backgroundColor = "red"
    }
    
    re.innerHTML = "Você acertou " + c0 + "/5"
    n3.style.display = 'none'
    n4.style.display = 'block'
    re.style.display = "block"
    
}