function calcular() {
    let idade = window.document.querySelector('input#inputidade');
    let resultado = window.document.querySelector('div#res');
    let anos = Number(idade.value);
    resultado.innerHTML = `<p>Sua idade atual  é <strong>${anos}</strong></p>`;
    if (anos < 16 && anos >= 1) {
        res.innerHTML += `<p>Você não vota!</p>`
    } else if ((anos < 18 && anos > 15) || (anos > 65 && anos < 118)) {
        res.innerHTML += `<p>Você Opcional!</p>`
    } else if (anos < 1 || anos > 117) {
        res.innerHTML += `<p>Você Não Existe!</p>`
    }
    else {
        res.innerHTML += `<p>Voto Obrigatório!</p>`
    }
}