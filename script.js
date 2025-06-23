function alteraQtd(produto, acao) {
    const qtd = document.getElementById('qtd-' + produto)
    const valor = document.getElementById('valor-' + produto)
    const total = document.getElementById('total-' + produto)

    if(acao == '-' && qtd.innerHTML == 0){
        // alert('A quantidade de produtos não pode ser inferior a 0.')
        qtd.classList.add('desativar') 
    } else {
        qtd.classList.remove('desativar')
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--
        total.innerHTML = qtd.innerHTML * valor.innerHTML
        soma()
    } 
}

function somaTotal(valores) {
    let soma = 0

    for(let i = 0; i < valores.length; i++) {
        soma += valores[i];
    }

    return soma;
}

function soma() {
    let valores = [
        Number(document.getElementById('total-1').innerHTML),
        Number(document.getElementById('total-2').innerHTML),
        Number(document.getElementById('total-3').innerHTML)
    ]

    document.getElementById('subtotal').innerHTML = somaTotal(valores)
}
