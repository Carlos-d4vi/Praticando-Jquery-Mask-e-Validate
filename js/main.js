$(document).ready(() => {

    $('#telefone').mask('(00) 0000-0000')
    $('#cpf').mask('000.000.000-00', {reverse: false});
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: 'required',
            telefone: 'required',
            email: 'required',
            endereco: 'required',
            cep: 'required',
            cpf: 'required',
        },
        messages: {
            nome: 'insira seu nome',
            telefone: 'insira seu telefone',
            email: 'insira seu email',
            endereco: 'insira seu endereço',
            cep: 'insira seu cep',
            cpf: 'insira seu cpf',
        }
    })

    $('form').submit((e) => {
        e.preventDefault()
        
        /* recuperar os dados do dom */
        $('form button').on('click', () => {
            const nome = $('#nome').val()
            const telefone = $('#telefone').val()
            const email = $('#nome').val()
            const cep = $('#cep').val()
            const cpf = $('#cpf').val()
    
            console.log(`${nome}, ${telefone}, ${email}, ${cep}, ${cpf}`)
        })

    })
})