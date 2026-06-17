const vdolar = document.querySelector("#vdolar")
const botao = document.querySelector("#buscaCotacao")
const resultado = document.querySelector("#resultado")

function buscaCotacao() {

    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
        .then(function (resposta) {
            return resposta.json()
        })

        .then(function (dados) {

            let valorDolar = Number(dados.USDBRL.bid)
            let quantia = Number(vdolar.value) * valorDolar
            let valorFormatado = quantia.toLocaleString('pt-BR', {
                style: "currency",
                currency: "BRL"
            })

            resultado.textContent = valorFormatado
        })
}

botao.addEventListener("click", () => buscaCotacao())