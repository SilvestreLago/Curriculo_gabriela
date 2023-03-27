function carregar(){
    var txt = window.document.getElementById('text')
    var data = new Date()
    var hora = data.getHours()
    txt.innerHTML = `AGORA SÃO ${hora} HORAS.`
}