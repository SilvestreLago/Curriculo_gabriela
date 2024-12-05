$(document).ready(function(){
    /* BOTÃO DOS CURSOS */
    /* ELETRO */
    $('#btnEletro').click(function(){
        $('#eletro').addClass('ativo')
        setTimeout(() => {$('#eletro').removeClass('ativo')}, 1000)
    })
    /* INFO */
    $('#btnInfo').click(function(){
        $('#info').addClass('ativo')
        setTimeout(() => {$('#info').removeClass('ativo')}, 1000)
    })
    /* MINERA */
    $('#btnMinera').click(function(){
        $('#minera').addClass('ativo')
        setTimeout(() => {$('#minera').removeClass('ativo')}, 1000)
    })


    /* FEEDBACK */
    /* MOSTRA UM SPINER AVISANDO DO ENVIO */
    $('#btnFeedback').click(function(){
        $('#envFeedback').css('display', 'block')
        setTimeout(() => {$('#spin').css('display', 'none')}, 3000)
        setTimeout(() => {$('#envSuccess').css('display', 'inline-block')}, 3000)
        setTimeout(() => {$('#envStatus').text('Feedback enviado com sucesso!')}, 3000)
    })
    /* ATRASA O ENVIO DO FORMULÁRIO */
    $('#envForms').on('submit', function(event) {
        event.preventDefault()
        setTimeout(() => {this.submit()}, 4000)
    })
    /* VERIFICA CAMPOS DE PREENCHIMENTO */
    function verfCampos() {
        let preenchido = true;
        $('#envForms :input[required]').each(function() {
            if (!$(this).val().trim()) {
                preenchido = false
            }
        });
        $('#btnFeedback').prop('disabled', !preenchido)
    }
    $('#envForms :input[required]').on('input', verfCampos)
    verfCampos()
})