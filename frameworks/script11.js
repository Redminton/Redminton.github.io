
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

    }
}
const diasemana = new Date().getDay();
console.log('teste', diasemana);


switch (diasemana) {
    case 0:
        res.innerHTML += `<p> hoje é Domingo</p>`;
        break
    case 1:
        res.innerHTML += `<p> hoje é Segunda Feira</p>`;
        break
    case 2:
        res.innerHTML += `<p> hoje éTerça-Feira</p>`;
        break
    case 3:
        res.innerHTML += `<p> hoje é Quarta-Feira</p>`;
        break
    case 4:
        res.innerHTML += `<p>hoje é Quinta-Feira</p>`;
        break
    case 5:
        res.innerHTML += `<p> hoje é Sexta-Feira</p>`;
        break
    case 6:
        res.innerHTML += `<p> hoje é Sábado</p>`;
        break

}


