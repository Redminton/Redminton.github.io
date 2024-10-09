function calcular() {
    var x = window.document.querySelector('input#x');
    var res = window.document.querySelector('div#res');
    var vel = Number(x.value);
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`;
    if (vel > 80) {
        res.innerHTML += `<p>Você foi <strong>Multado!</strong></p>`;
    }
    else {
        res.innerHTML += `<p>Dirija sempre com Cautela!</p>`
    }
    console.log("teste");
}