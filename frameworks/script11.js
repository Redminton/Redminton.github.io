function calcular() {
    let dia = window.document.querySelector('input#inputdia');
    let resultado = window.document.querySelector('div#res');
    let semana = Number(dia.value);
    resultado.innerHTML = `<p>Você digitou o número: <strong>${semana}</strong><p>`;

    switch (semana) {
        case 1:
            res.innerHTML += `<p>Domingo</p>`;
            break
        case 2:
            res.innerHTML += `<p>Segunda Feira</p>`;
            break
        case 3:
            res.innerHTML += `<p>Terça-Feira</p>`;
            break
        case 4:
            res.innerHTML += `<p>Quarta-Feira</p>`;
            break
        case 5:
            res.innerHTML += `<p>Quinta-Feira</p>`;
            break
        case 6:
            res.innerHTML += `<p>Sexta-Feira</p>`;
            break
        case 7:
            res.innerHTML += `<p>Sábado</p>`;
            break
        default:
            res.innerHTML += `<p>Erro Dia Inválido!</p>`;
    }
}