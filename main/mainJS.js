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
//_________________________________________________________________

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
//_____________________________________________________________
//modo Festa
const festaBotao = document.getElementById('festa');
const coresFesta = ['red', 'green', 'blue', 'yellow','black'];
let trocaAutomatica = null;
function trocarCor() {
    body.style.backgroundColor = coresFesta[indiceCor];
    indiceCor++;

    if (indiceCor >= coresFesta.length) {
        indiceCor = 0;
    }
}
festaBotao.addEventListener('click', () => {
    if (trocaAutomatica) {
        // Se a troca automática estiver ocorrendo, pare-a
        clearInterval(trocaAutomatica);
        trocaAutomatica = null;
    } else {
        // Caso contrário, inicie a troca automática a cada 1000 milissegundos (1 segundo)
        trocaAutomatica = setInterval(trocarCor, 50);
    }
}); 


//__________________________________________________________
//musica
var dorime = document.getElementById("dorime");

function playMusica() {
  if (dorime.paused) {
   dorime.play();
  } else {
    dorime.pause();
  }
}

function playMusica2() {
  if (brazinoaudio.paused) {
   brazinoaudio.play();
  } else {
    brazinoaudio.pause();
  }
} 
