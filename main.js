const form = document.getElementById('form-confirma')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    if( Number(campoB.value) > Number(campoA.value) ) {
        mensagemResposta.innerHTML = mensagemCasoB
        campoB.value = ' ';
        campoA.value = ' ';
    }
    else {
        mensagemResposta.innerHTML = mensagemCasoA
        alert('Campo A maior que B, não será possível finalizar.')
    }
})

const campoA = document.getElementById('campo-a')
const campoB = document.getElementById('campo-b')
const botao = document.getElementById('btn-depositar')

const mensagemResposta = document.getElementById('mensagem-resposta')
const mensagemCasoB = `O valor do campo B ${campoB.value} é maior que o valor do campo A ${campoA.value}`
const mensagemCasoA = `O valor do campo A ${campoA.value} é maior que o valor do campo B ${campoB.value}`


console.log(form)