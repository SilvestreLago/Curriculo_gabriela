var b_cad = document.getElementById('cadastrar')

function V_user(){
    var user = document.getElementById('user')
    var spanu = document.getElementById('alertu')

    userv = user.value

    if (userv.length <= 0){
        b_cad.setAttribute('disabled', 'true')
        b_cad.style.backgroundColor = "gray"
        user.style.border = "2px solid red"
        spanu.style.display = 'block'
    }

    else{
        user.style.border = "2px solid green"
        b_cad.removeAttribute('disabled')
        spanu.style.display = 'none'
        b_cad.style.backgroundColor = "#3B9EB1"
    }
    
}

function V_senha(){
    var senha = document.getElementById('senha')
    var spans = document.getElementById('alerts')

    senhav = senha.value

    if (senhav.length <= 0){
        b_cad.setAttribute('disabled', 'true')
        b_cad.style.backgroundColor = "gray"
        senha.style.border = "2px solid red"
        spans.style.display = 'block'
    }

    else{
        senha.style.border = "2px solid green"
        b_cad.removeAttribute('disabled')
        spans.style.display = 'none'
        b_cad.style.backgroundColor = "#3B9EB1"
    }
}

function V_csenha(){
    var csenha = document.getElementById('csenha')
    var spancs = document.getElementById('alertcs')
    var spancs2 = document.getElementById('alertcs2')
    var senha = document.getElementById('senha')

    csenhav = csenha.value
    senhav = senha.value

    if (senhav != csenhav){
        b_cad.setAttribute('disabled', 'true')
        b_cad.style.backgroundColor = "gray"
        csenha.style.border = "2px solid red"
        spancs.style.display = 'block'
        spancs2.style.display = 'none'
    }

    else if (csenhav.length <= 0){
        b_cad.setAttribute('disabled', 'true')
        b_cad.style.backgroundColor = "gray"
        csenha.style.border = "2px solid red"
        spancs2.style.display = 'block'
        spancs.style.display = 'none'
    }

    else{
        csenha.style.border = "2px solid green"
        b_cad.removeAttribute('disabled')
        spancs.style.display = 'none'
        spancs2.style.display = 'none'
        b_cad.style.backgroundColor = "#3B9EB1"
    }

}
