// comandos barra de navegação
const expandButton = document.getElementById('expandButton');
const botaoRedes = document.getElementById('botaoRedes')
const navigation = document.querySelector('.navigation');
const navigation2 = document.querySelector('.navigation2');
expandButton.addEventListener('click', () => {
    navigation.classList.toggle('expanded');
});
botaoRedes.addEventListener('click', () => {
    navigation2.classList.toggle('expanded2');
});

//Tema dark/light
const changeColorButton = document.getElementById('tema');
const body = document.body;

// Define um array de cores que você deseja alternar
const cores = ['#0f0f0f', /*'#565869',*/ '#ffffff'];

let indiceCor = 1;
// Adiciona um evento de clique ao botão
changeColorButton.addEventListener('click', () => {
    body.style.backgroundColor = cores[indiceCor];
    indiceCor++;

    if (indiceCor >= cores.length) {
        indiceCor = 0;
    }
});